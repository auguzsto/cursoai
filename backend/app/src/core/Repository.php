<?php
namespace App\core;

use Exception;

    abstract class Repository extends Database {
        public string | null $table = null;

        public function findAll(): array {
            try {
                return $this->select("*", $this->table)->toArray();
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        public function findById(int | string $id): array {
            try {
                $finder = $this->select("*", $this->table)->where("id")->equals($id)->toSingle();
                if(is_null($finder)) {
                    throw new Exception("Não encontrado");
                }
                return $finder; 
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        public function change(object $object): void {
            try {
                $id = $object->id;
                $this->update((array) $object, $this->table, "id = '$id'");
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        public function remove(int | string $id): void {
            try {
                $this->delete($this->table, "id = '$id'");
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        public function destroy(int | string $id): void {
            try {
                $this->deletePermanent($this->table, "id = '$id'");
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        public function save(object $object): void {
            try {
                $object->created_at = date('Y-m-d H:i:s');
                $this->insert((array) $object, $this->table);
            } catch (\Throwable $th) {
                throw $th;
            }
        }
        
    }