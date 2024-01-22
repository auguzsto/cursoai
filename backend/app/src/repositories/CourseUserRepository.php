<?php
namespace App\repositories;
use PDO;
use Exception;
use App\models\User;
use App\models\Course;
use App\core\Repository;
use App\handlers\HandlerException;

    class CourseUserRepository extends Repository {

        function __construct() {
            $this->table = "courses_users";
        }

        public function findSubscribeByUserId(int $userId): array {
            try {
                $finder = $this->query("
                select 
                    cu.user_id as user_id,
                    cu.course_id as course_id,
                    cu.created_at as subscribe_created_at,
                    cu.updated_at as subscribe_updated_at,
                    cu.deleted_at as subscribe_deleted_at,
                    c.name as course_name,
                    c.author as course_author,
                    c.created_at as course_created_at,
                    c.updated_at as course_updated_at,
                    c.deleted_at as course_deleted_at
                    
                from 
                    courses_users cu 
                join 
                    courses c on c.id = cu.course_id 
                and 
                    cu.user_id = 1
                ")->fetchAll(PDO::FETCH_ASSOC);
                return $finder;
            } catch (\Throwable $th) {
                throw $th;
            }
        }
        

        public function hasUserSubscribe(User $user, Course $course): void {
            try {
                $finder = $this->select("*", $this->table)->where("user_id")->equals($user->id)->and("course_id")->equals($course->id)->toArray();
                if(!empty($finder)) {
                    throw new Exception("Usuário já inscrito neste curso.");
                }
            } catch (\Throwable $th) {
                throw new HandlerException($th->getMessage(), 400);
            }
        }
    }