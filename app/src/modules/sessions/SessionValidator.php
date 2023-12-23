<?php
namespace App\modules\sessions;

use Exception;

    class SessionValidator {

        static public function user_id(int $user_id) {
            try {
                if(empty($user_id)) {
                    throw new Exception("Usuário inválido.");
                }
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        static public function token(string $token) {
            try {
                if(empty($token)) {
                    throw new Exception("Token inválido.");
                }
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        static public function expired_at(string $expired_at) {
            try {
                if(empty($expired_at)) {
                    throw new Exception("Expiração inválida.");
                }
            } catch (\Throwable $th) {
                throw $th;
            }
        }
    }