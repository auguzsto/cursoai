<?php
namespace App\controllers;
use Exception;
use App\models\User;
use App\models\Course;
use App\models\Session;
use App\core\Controller;
use App\models\CourseUser;
use App\handlers\HandlerException;

    class CourseUserController extends Controller {
        
        public function subscribe(): void {
            try {
                $courseUser = CourseUser::fromMap($this->request());
                $this->hasUserSubscribe($courseUser->user, $courseUser->course);

                $this->db()->insert([
                    "user_id" => $courseUser->user->id,
                    "course_id" => $courseUser->course->id,
                    "created_at" => $courseUser->created_at
                ], "courses_users");

            } catch (\Throwable $th) {
                throw $th;
            }
        }

        private function hasUserSubscribe(User $user, Course $course): void {
            try {
                $userId = $user->id;
                $courseId = $course->id;
                $finder = $this->db()->select("*", "courses_users")->where("user_id = '$userId'")->and("course_id = '$courseId'")->toArray();
                if(!empty($finder)) {
                    throw new Exception("Usuário já inscrito neste curso.");
                }
            } catch (\Throwable $th) {
                throw new HandlerException($th->getMessage(), 400);
            }
        }
    }