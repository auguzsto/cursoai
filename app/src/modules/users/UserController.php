<?php
namespace App\modules\users;
use Exception;
use App\core\Controller;

    class UserController extends Controller {

        protected string $table = "users";

        public function findByEmail(string $email): array {
            try {
                $finder = $this->db()->select("*", $this->table)->where("email = '$email'")->toArray();
                return $finder;
            } catch (\Throwable $th) {
                throw $th;
            }
        }
    }