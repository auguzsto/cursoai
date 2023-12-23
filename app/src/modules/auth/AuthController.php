<?php

namespace App\modules\auth;
use Exception;
use App\core\Controller;
use App\modules\users\User;
use App\handlers\HandlerException;
use App\modules\users\UserController;
use App\modules\sessions\SessionController;

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
    }