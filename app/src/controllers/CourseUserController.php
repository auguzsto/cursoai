<?php
namespace App\controllers;
use App\repositories\CourseUserRepository;
use Exception;
use App\models\User;
use App\models\Course;
use App\models\Session;
use App\core\Controller;
use App\models\CourseUser;
use App\handlers\HandlerException;

    class CourseUserController extends Controller {

        private CourseUserRepository $courseUserRepository;

        function __construct() {
            $this->courseUserRepository = new CourseUserRepository();
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