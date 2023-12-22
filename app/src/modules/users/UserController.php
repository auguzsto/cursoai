<?php
use App\core\Database;
use App\modules\users\User;

    class UserController {

        static public function create(User $user): void {
            try {
                $db = Database::getInstance();
                $db->insert((array) $user, "users");
            } catch (\Throwable $th) {
                throw $th;
            }
        }
    }