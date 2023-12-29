<?php
namespace App\models;

use App\core\Model;
use App\models\User;
use App\core\Database;
use App\models\Course;
use App\validators\CourseUserValidator;
use Exception;

    class CourseUser extends Model {

        public Course $course;

        public User $user;
        
        static public function fromMap(array $map): self {
            try {
                $courseUser = new self;
                $courseUser->course = CourseUserValidator::course($map['course_id']) ?? $courseUser->courseById($map['course_id']);
                $courseUser->user = CourseUserValidator::user($map['user_id']) ?? $courseUser->userById($map['user_id']);
                $courseUser->created_at = $map['created_at'] ?? date('Y-m-d H:i:s');
                return $courseUser;
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        private function courseById(int $id): Course {
            try {
                $db = Database::getInstance();
                $finder = $db->select("*", "courses")->where("id = '$id'")->toSingle();
                if(is_null($finder)) {
                    throw new Exception("Curso inválido");
                }
                return Course::fromMap($finder);
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        private function userById(int $id): User {
            try {
                $db = Database::getInstance();
                $finder = $db->select("*", "users")->where("id = '$id'")->toSingle();
                if(is_null($finder)) {
                    throw new Exception("Usuário inválido");
                }
                return User::fromMap($finder);
            } catch (\Throwable $th) {
                throw $th;
            }
        }
    }