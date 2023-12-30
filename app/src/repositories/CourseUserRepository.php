<?php
namespace App\repositories;
use Exception;
use App\models\User;
use App\models\Course;
use App\core\Repository;
use App\handlers\HandlerException;

    class CourseUserRepository extends Repository {

        function __construct() {
            $this->table = "courses_users";
        }

        public function hasUserSubscribe(User $user, Course $course): void {
            try {
                $userId = $user->id;
                $courseId = $course->id;
                $finder = $this->select("*", "courses_users")->where("user_id = '$userId'")->and("course_id = '$courseId'")->toArray();
                if(!empty($finder)) {
                    throw new Exception("Usuário já inscrito neste curso.");
                }
            } catch (\Throwable $th) {
                throw new HandlerException($th->getMessage(), 400);
            }
        }
    }