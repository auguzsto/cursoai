<?php
namespace App\controllers;

use Exception;
use App\models\User;
use App\models\Session;
use App\core\Controller;
use App\handlers\HandlerException;

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
                    unset($token);
                    setcookie('cursoai_session', '', -1, "/");
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

        public function getUserLogged(): User {
            try {
                $token = $_COOKIE['cursoai_session'];
                $userController = new UserController();
                $userId = $this->db()->select("user_id", "sessions")->where("token = '$token'")->toSingle()['user_id'];
                return User::fromMap($userController->findById($userId));
            } catch (\Throwable $th) {
                echo $userId;
                throw new HandlerException($th->getMessage(), 500);
            }
        }
    }