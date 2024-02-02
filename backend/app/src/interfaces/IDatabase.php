<?php
namespace App\interfaces;

use PDOStatement;

    interface IDatabase {

        public function query(string $query): PDOStatement;
        public function insert(array $columnsAndValues, string $table): void;
        public function update(array $columnsAndValues, string $table, string $where): void;
        public function delete(string $table, string $where): void;
        public function deletePermanent(string $table): self;
        public function select(string $columns, string $table): self;
        public function where(string $column): self;
        public function equals(string | int $value): self;
        public function like(string $value): self;
        public function and(string $condition): self;
        public function orderDesc(string $column): self;
        public function orderAsc(string $column): self;
        public function isNull(): self;
        public function toArray(): array;
        public function toSingle(): array | null;
        public function toExecute(): void;
    }