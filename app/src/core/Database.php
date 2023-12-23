<?php

namespace App\core;

use App\handlers\HandlerException;
use Exception;
use PDO;
use PDOStatement;

require __DIR__ . "/../../../config.php";

class Database {

    private string $query;

    private static Database | null $instance = null;

    public static function getInstance(): self {

        if(null === static::$instance) {
            static::$instance = new self();
        }

        return static::$instance;
    }

    private function __construct() {
        $this->doCon();
    }

    private function doCon(): void {
        try {
            $this->con();

        } catch (\Throwable $th) {
            throw $th;
        }
    }
    
    private function con(): PDO {
        try {
            global $config;
            $host = $config['host'];
            $port = $config['port'];
            $dbuser = $config['user'];
            $dbpassword = $config['password'];

            $pdo = new PDO("mysql:host=$host:$port;dbname=cursoai", "$dbuser", "$dbpassword");
            return $pdo;
            
        } catch (\Throwable $th) {
            $pdo = new PDO("mysql:host=$host:$port;", "$dbuser", "$dbpassword");
            return $pdo;
        }
    }

    public function query(string $query): PDOStatement {
        try {
            $pdo = $this->con();
            return $pdo->query($query);

        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function insert(array $columnsAndValues, string $table): void {
        try {
            $pdo = $this->con();
            $columns = implode(", ", array_keys($columnsAndValues));
            $values = implode(", :", array_keys($columnsAndValues));
            
            $pdo->prepare("INSERT INTO $table ($columns) VALUES (:$values)")->execute($columnsAndValues);

        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function update(array $columnsAndValues, string $table, string $where): void {
        try {
            $pdo = $this->con();
            $set = implode("=?, ", array_keys($columnsAndValues));

            $pdo->prepare("UPDATE $table SET $set = ? WHERE $where")->execute(array_values($columnsAndValues));
            $pdo->prepare("UPDATE $table SET updated_at = ? WHERE $where")->execute([date('Y-m-d H:i:s')]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function delete(array $columnsAndValues, string $table, string $where): void {
        try {
            $pdo = $this->con();
            $set = implode("=?, ", array_keys($columnsAndValues));

            $pdo->prepare("UPDATE $table SET $set = ? WHERE $where")->execute(array_values($columnsAndValues));
            $pdo->prepare("UPDATE $table SET deleted_at = ? WHERE $where")->execute([date('Y-m-d H:i:s')]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function select(string $columns, string $table): self {
        $this->query = "SELECT $columns FROM $table";
        return $this;
    }

    public function where(string $condition): self {
        $this->query = $this->query . " WHERE $condition";
        return $this;
    }

    public function like(string $value): self {
        $this->query = $this->query . " LIKE '%$value%'";
        return $this;
    }

    public function and(string $condition): self {
        $this->query = $this->query . " AND $condition";
        return $this;
    }

    public function orderDesc(string $column): self {
        $this->query = $this->query . " ORDER BY $column DESC";
        return $this;
    }

    public function orderAsc(string $column): self {
        $this->query = $this->query . " ORDER BY $column ASC";
        return $this;
    }

    public function toArray(): array {
        try {
            $pdo = $this->con();
            $array = $pdo->query($this->query)->fetchAll(PDO::FETCH_ASSOC);
            return $array;
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function toSingle(): array {
        $pdo = $this->con();
        $array = $pdo->query($this->query)->fetchAll(PDO::FETCH_ASSOC)[0];
        return $array;
    }
}