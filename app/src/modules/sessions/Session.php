<?php
namespace App\modules\sessions;
use App\core\Model;
use App\modules\sessions\SessionValidator;

    class Session extends Model {
        
        public int $user_id;
        public string $token;
        public string $expired_at;

        static public function fromMap(array $map): self {
            try {
                $session = new self();
                $session->user_id = SessionValidator::user_id($map["user_id"]) ?? $map["user_id"];
                $session->token = SessionValidator::token($map["token"]) ?? $map["token"];
                $session->expired_at = SessionValidator::expired_at($map['expired_at']) ?? $map['expired_at'];
                $session->created_at = $map['created_at'] ?? date('Y-m-d H:i:s');
                return $session;
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        
        static public function hasCookieSession(): bool {
            try {
                if(empty($_COOKIE['cursoai_session'])) {
                    return false;
                }

                return true;
            } catch (\Throwable $th) {
                throw $th;
            }
        }
    }