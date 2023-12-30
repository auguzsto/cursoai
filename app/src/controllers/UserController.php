<?php
namespace App\controllers;

use App\core\Controller;
use App\models\User;
use App\repositories\UserRepository;
use Exception;

    class UserController extends Controller {

        private UserRepository $userRepository;

        function __construct() {
            $this->userRepository = new UserRepository();
        }

        public function findById(int $id): array {
            try {
                return $this->userRepository->findById($id);
            } catch (\Throwable $th) {
                throw $th;
            }
        }
    }