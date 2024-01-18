<?php
namespace App\controllers;

use App\core\Controller;
use App\core\Security;
use App\handlers\HandlerException;
use App\models\User;
use App\repositories\UserRepository;

    class UserController extends Controller {

        private UserRepository $userRepository;

        function __construct() {
            $this->userRepository = new UserRepository();
        }

        public function create(): void {
            try {
                Security::isAdministrator();
                $user = User::fromMap($this->request());
                $this->userRepository->save($user);
            } catch (\Throwable $th) {
                throw new HandlerException($th->getMessage(), 400);
            }
        }

        public function update(int $id): void {
            try {
                Security::isAdministrator();
                $user = (object) $this->request();
                $user->id = $id;
                $this->userRepository->change($user);
            } catch (\Throwable $th) {
                throw new HandlerException($th->getMessage(), 400);
            }
        }

        public function delete(int $id): void {
            try {
                Security::isAdministrator();
                $this->userRepository->remove($id);
            } catch (\Throwable $th) {
                throw new HandlerException($th->getMessage(), 400);
            }
        }

        public function findAll(): string | array {
            try {
                Security::isAdministrator();
                return print json_encode($this->userRepository->findAll());
            } catch (\Throwable $th) {
                throw new HandlerException($th->getMessage(), 400);
            }
        }

        public function findById(int $id): string | array {
            try {
                Security::isAdministrator();
                return print json_encode($this->userRepository->findById($id));
            } catch (\Throwable $th) {
                throw new HandlerException($th->getMessage(), 400);
            }
        }
    }