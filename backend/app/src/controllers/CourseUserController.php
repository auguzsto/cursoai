<?php
namespace App\controllers;
use App\repositories\CourseUserRepository;
use Exception;
use App\models\User;
use App\models\Course;
use App\models\Session;
use App\core\Controller;
use App\core\Security;
use App\models\CourseUser;
use App\handlers\HandlerException;
use App\repositories\CourseRepository;

    class CourseUserController extends Controller {

        private CourseUserRepository $courseUserRepository;
        private CourseRepository $courseRepository;

        function __construct() {
            $this->courseUserRepository = new CourseUserRepository();
            $this->courseRepository = new CourseRepository();
        }

        public function findSubscribeByUserId(int $userId): string | array {
            try {
                $userLogged = User::logged();
                $finders = $this->courseUserRepository->findSubscribeByUserId($userId);

                if($userId == $userLogged->id || Security::isAdministrator()) {
                    return print json_encode($finders);
                }

                throw new Exception("Você não tem permissão para esta operação");
                
            } catch (\Throwable $th) {
                throw new HandlerException($th->getMessage(), 405);
            }
        }

        public function subscribe(): void {
            try {
                $courseUser = CourseUser::fromMap($this->request());
                $this->courseUserRepository->hasUserSubscribe($courseUser->user, $courseUser->course);

                $object = [
                        "user_id" => $courseUser->user->id,
                        "course_id" => $courseUser->course->id,
                        "created_at" => $courseUser->created_at
                    ];

                $this->courseUserRepository->save((object) $object);
            } catch (\Throwable $th) {
                throw $th;
            }
        }
    }