<?php

namespace App\core;

use Exception;

    class Migrations {
        
        public static function auto(string $fileSQL): void {
            $db = Database::getInstance();
            global $config;
                try {
                    $file = file_get_contents("app/migrations/$fileSQL");
                    if(!$file) {
                        throw new Exception("Ocorreu um problema na migração ao banco de dados.");
                    }
                    $migration = str_replace(["CREATE TABLE", "INSERT INTO"], ["CREATE TABLE IF NOT EXISTS", "REPLACE INTO"], $file);
                    $db->query($migration);
                    
                } catch (Exception $e) {
                    throw new Exception($e->getMessage());
                }
            }
    }