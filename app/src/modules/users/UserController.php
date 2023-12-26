<?php
namespace App\modules\users;
use App\core\Controller;

    class UserController extends Controller {

        protected string $table = "users";

        public function findById(int $id): array {
            try {
                $finder = $this->db()->select("*", $this->table)->where("id = '$id'")->toSingle();
                return $finder;
            } catch (\Throwable $th) {
                throw $th;
            }
        }
    }