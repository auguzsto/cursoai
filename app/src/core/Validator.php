<?php
namespace App\core;

use Exception;
use App\modules\users\User;

    class Validator {
        
        protected static function isUserAdministrator(): bool {
            try {
                $user = User::logged();
                if(empty($user) || !$user->is_administrator) {
                    throw new Exception("Você não tem permissão para esta operação");
                }
                return true;
            } catch (\Throwable $th) {
                throw $th;
            }
        }
    }