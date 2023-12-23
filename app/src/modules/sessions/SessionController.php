<?php
namespace App\modules\sessions;

use App\core\Controller;
use App\modules\users\User;
use App\modules\sessions\Session;

    class SessionController extends Controller {

        protected string $table = "sessions";

        public function create(User $user): void {
            try {
                if(Session::hasCookieSession()) {
                    return;
                }

                $expire = strtotime("+1 day", strtotime($user->created_at));
                $token = password_hash($expire, PASSWORD_BCRYPT);
                $session = Session::fromMap([
                    "user_id" => $user->id,
                    "token" => $token,
                    "expired_at" => date("Y-m-d H:i:s", $expire),
                ]);

                $this->db()->insert((array) $session, $this->table);
                setcookie('cursoai_session', $token, $expire);
            } catch (\Throwable $th) {
                throw $th;
            }
        }
    }