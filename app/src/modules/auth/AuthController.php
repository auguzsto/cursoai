<?php

namespace App\modules\auth;
use App\core\Controller;
use App\handlers\HandlerException;
use App\modules\users\User;

    class AuthController extends Controller {

        protected $table = "users";

        public function signUp(): void {
            try {
                $user = User::fromMap($this->request());
                $this->db()->insert((array) $user, $this->table);
            } catch (\Throwable $th) {
               throw new HandlerException($th->getMessage(), 400);
            }
        }
    }