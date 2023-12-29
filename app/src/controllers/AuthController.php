<?php
namespace App\controllers;

use Exception;
use App\models\Auth;
use App\models\User;
use App\models\Session;
use App\core\Controller;
use App\handlers\HandlerException;

    class AuthController extends Controller {

        protected $table = "users";

        public function signIn(): void {
            try {
                $auth = Auth::fromMap($this->request());
                $email = $auth->email;
                $password = $auth->password;

                $finder = $this->db()->select("*", $this->table)->where("email = '$email'")->toArray();
                if(empty($finder)) {
                    throw new Exception("Email ou senha inválidos.");
                }

                $user = User::fromMap($finder[0]);
                if(!password_verify($password, $user->password)) {
                    throw new Exception("Email ou senha inválidos.");
                }

                $sessionController = new SessionController();
                $sessionController->create($user);

            } catch (\Throwable $th) {
               throw new HandlerException($th->getMessage(), 404);
            }
        }

        public function signUp(): void {
            try {
                $user = User::fromMap($this->request());
                $user->password = password_hash($user->password, PASSWORD_BCRYPT);
                $this->db()->insert((array) $user, $this->table);
            } catch (\Throwable $th) {
               throw new HandlerException($th->getMessage(), 400);
            }
        }

        public function signOut(): void {
            try {
                Session::destroy();
            } catch (\Throwable $th) {
                throw $th;
            }
        }
    }