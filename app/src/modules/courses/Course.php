<?php
namespace App\modules\courses;
use App\core\Model;

    class Course extends Model {

        public string $name;

        static public function fromMap(array $map): self {
            try {
                $course = new self;
                $course->id = $map['id'] ?? null;
                $course->name = CourseValidator::name($map['name']) ?? $map['name'];
                $course->created_at = $map['created_at'] ?? date('Y-m-d H:i:s');
                $course->updated_at = $map['updated_at'] ?? null;
                $course->deleted_at = $map['deleted_at'] ?? null;
                return $course;
            } catch (\Throwable $th) {
                throw $th;
            }
        }
    }