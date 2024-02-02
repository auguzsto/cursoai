<?php

namespace App\core;

use App\interfaces\IDatabase;
use PDO;
use PDOStatement;

require __DIR__ . "/../../../config.php";

class SQLiteDatabase implements IDatabase {

    private string $query;

    private static SQLiteDatabase | null $instance = null;

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
            $pdo = new PDO("sqlite:banco.sq3");
            return $pdo;
            
        } catch (\Throwable $th) {
            $pdo = new PDO("sqlite:curosai.sq3");
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

    public function delete(string $table, string $where): void {
        try {
            $pdo = $this->con();
            
            $pdo->prepare("UPDATE $table SET deleted_at = ? WHERE $where")->execute([date('Y-m-d H:i:s')]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function deletePermanent(string $table): self {
        try {
            $this->query = "DELETE FROM $table";
            return $this;
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function select(string $columns, string $table): self {
        $this->query = "SELECT $columns FROM $table";
        return $this;
    }

    public function where(string $column): self {
        $this->query = $this->query . " WHERE $column";
        return $this;
    }

    public function equals(string | int $value): self {
        $this->query = $this->query . " = '$value'";
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

    public function isNull(): self {
        $this->query = $this->query . " IS NULL";
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

    public function toSingle(): array | null {
        $pdo = $this->con();
        $array = $pdo->query($this->query)->fetchAll(PDO::FETCH_ASSOC)[0];
        return $array;
    }

    public function toExecute(): void {
        $pdo = $this->con();
        $pdo->query($this->query)->execute();
    }
}