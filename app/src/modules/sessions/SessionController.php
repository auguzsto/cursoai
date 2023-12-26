<?php
namespace App\modules\sessions;

use App\core\Controller;
use App\handlers\HandlerException;
use App\modules\users\User;
use App\modules\sessions\Session;
use Exception;

    class SessionController extends Controller {

        protected string $table = "sessions";

        public function create(User $user): void {
            try {
                if(Session::hasCookie()) {
                    return;
                }

                $expire = strtotime("+1 day", strtotime(date('Y-m-d H:i:s')));
                $token = password_hash($expire, PASSWORD_BCRYPT);
                $session = Session::fromMap([
                    "user_id" => $user->id,
                    "token" => $token,
                    "expired_at" => date("Y-m-d H:i:s", $expire),
                ]);

                $this->db()->insert((array) $session, $this->table);
                setcookie('cursoai_session', $token, null, "/");
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        public function expired(): void {
            try {
                $token = $_COOKIE['cursoai_session'];
                $now = date('Y-m-d H:i:s');
                
                $finder = $this->db()->select("*", $this->table)->where("token = '$token'")->toArray();
                if(empty($finder)) {
                    throw new Exception("Sessão não encontrada");
                }

                $session = Session::fromMap($finder[0]);
                if($now > $session->expired_at) {
                    unset($token);
                    setcookie('cursoai_session', '', -1, "/");
                    throw new Exception("Sessão expirada");
                }

            } catch (\Throwable $th) {
                throw new HandlerException($th->getMessage(), 400);
            }
        }
    }