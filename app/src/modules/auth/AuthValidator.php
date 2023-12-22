<?php
namespace App\modules\auth;

use Exception;

    class AuthValidator {

        public static function email(string $email): void { 
            try {
                if(empty($email) || $email == null) {
                    throw new Exception("Campo e-mail inválido.");
                }
            } catch (Exception $th) {
                echo json_encode([
                    "error" => $th->getMessage()
                ]);
            }
        }

        public static function password(string $password): void { 
            try {
                if(empty($password) || $password == null) {
                    throw new Exception("Campo senha inválido.");
                }
            } catch (\Throwable $th) {
                echo $th->getMessage();
            }
        }
    }