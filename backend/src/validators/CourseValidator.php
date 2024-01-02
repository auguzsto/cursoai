<?php
namespace App\validators;

use Exception;

    class CourseValidator {

        static public function name(string | null $name): void {
            try {
                if(empty($name)) {
                    throw new Exception("Nome inválido");
                }

                if(strlen($name) > 50) {
                    throw new Exception("Nome ultrapassou o limite de 50 caracteres");
                }

                if(strlen($name) < 10) {
                    throw new Exception("Nome deve conter mais de 10 caracteres");
                }
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        static public function author(string | null $name): void {
            try {
                if(empty($name)) {
                    throw new Exception("Autor inválido");
                }
            } catch (\Throwable $th) {
                throw $th;
            }
        }
    }