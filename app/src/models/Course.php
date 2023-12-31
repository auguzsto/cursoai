<?php
namespace App\models;

use App\core\Model;
use App\validators\CourseValidator;

    class Course extends Model {

        public string $name;
        public string $author;

        static public function fromMap(array $map): self {
            try {
                $course = new self;
                $user = User::logged();
                $course->id = $map['id'] ?? null;
                $course->name = CourseValidator::name($map['name']) ?? $map['name'];
                $course->author = CourseValidator::author($user->full_name) ?? $user->full_name;
                $course->created_at = $map['created_at'] ?? date('Y-m-d H:i:s');
                $course->updated_at = $map['updated_at'] ?? null;
                $course->deleted_at = $map['deleted_at'] ?? null;
                return $course;
            } catch (\Throwable $th) {
                throw $th;
            }
        }
    }