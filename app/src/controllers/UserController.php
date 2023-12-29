<?php
namespace App\controllers;

use App\core\Controller;
use App\models\User;
use Exception;

    class UserController extends Controller {

        protected string $table = "users";

        public function findById(int $id): User {
            try {
                $finder = $this->db()->select("*", $this->table)->where("id = '$id'")->toSingle();
                if(is_null($finder)) {
                    throw new Exception("Usuário inválido");
                }

                return User::fromMap($finder);
            } catch (\Throwable $th) {
                throw $th;
            }
        }
    }