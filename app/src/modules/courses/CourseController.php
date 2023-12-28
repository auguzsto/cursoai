<?php
namespace App\modules\courses;
use App\core\Controller;
use App\handlers\HandlerException;
use App\modules\courses\Course;

    class CourseController extends Controller {

        protected string $table = "courses";

        public function create(): void {
            try {
                $course = Course::fromMap($this->request());
                $this->db()->insert((array) $course, $this->table);
            } catch (\Throwable $th) {
                throw new HandlerException($th->getMessage(), 400);
            }
        }

        public function findAll(): string {
            try {
                $courses = $this->db()->select('*', "courses")->where("deleted_at IS NULL")->toArray();
                return json_encode($courses);
            } catch (\Throwable $th) {
                throw new HandlerException($th->getMessage(), 400);
            }
        }
    }