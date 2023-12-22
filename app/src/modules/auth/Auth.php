<?php
namespace App\modules\auth;

use App\core\Model;
use App\modules\auth\AuthValidator;

    class Auth extends Model {
        
        public string $email;
        public string $password;
        
        public static function fromMap(array $map): self { 
            $auth = new self();
            $auth->email = AuthValidator::email($map['email']) ?? $map['email'];
            $auth->email = AuthValidator::password($map['password']) ?? $map['password'];
            return $auth;
        }
    }