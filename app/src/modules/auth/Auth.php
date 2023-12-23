<?php
namespace App\modules\auth;

use App\core\Model;
use App\modules\auth\AuthValidator;
use App\modules\users\UserValidator;

    class Auth extends Model {
        
        public string $email;
        public string $password;
        
        public static function fromMap(array $map): self { 
            try {
                $auth = new self();
                $auth->email = UserValidator::email($map['email']) ?? $map['email'];
                $auth->password = UserValidator::password($map['password']) ?? $map['password'];
                return $auth;
            } catch (\Throwable $th) {
                throw $th;
            }
        }
    }