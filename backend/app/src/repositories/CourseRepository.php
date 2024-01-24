<?php
namespace App\repositories;
use App\core\Repository;
use Exception;


    class CourseRepository extends Repository {
        
        function __construct() {
            $this->table = "courses";
        }

        public function findByUserId(int $user_id): array {
            try {
                $finders = $this->select("*", $this->table)->where("user_id")->equals($user_id)->toArray();
                return $finders;
            } catch (\Throwable $th) {
                throw $th;
            }
        }
    }