<?php

namespace App\modules\auth;
use App\core\Controller;
use App\modules\users\User;

    class AuthController extends Controller {

        protected $table = "users";

        public function signUp(): void {
            try {
                $user = User::fromMap($this->request());
                $this->db()->insert((array) $user, $this->table);
            } catch (\Throwable $e) {
                echo json_encode([
                    "error" => $e->getMessage()
                ]);
            }
        }
    }