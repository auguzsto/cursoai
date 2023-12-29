<?php
namespace App\controllers;
use App\models\Course;
use App\core\Controller;
use App\handlers\HandlerException;
use App\core\Security;
use Exception;

    class CourseController extends Controller {

        protected string $table = "courses";

        public function create(): void {
            try {
                Security::isAdministrator();
                $course = Course::fromMap($this->request());
                $this->db()->insert((array) $course, $this->table);
            } catch (\Throwable $th) {
                throw new HandlerException($th->getMessage(), 400);
            }
        }

        public function update(int $id): void {
            try {
                Security::isAdministrator();
                $finder = $this->db()->select("*", $this->table)->where("id = '$id'")->toSingle();
                if(is_null($finder)) {
                    throw new Exception("Curso inválido");
                }
                $course = $this->request();
                $this->db()->update($course, $this->table, "id = '$id'");
            } catch (\Throwable $th) {
                throw new HandlerException($th->getMessage(), 404);
            }
        }

        public function delete(int $id): void {
            try {
                Security::isAdministrator();
                $this->db()->delete($this->table, "id = '$id'");
            } catch (\Throwable $th) {
                throw new HandlerException($th->getMessage(), 400);
            }
        }

        public function findAll(): string {
            try {
                $courses = $this->db()->select('*', "courses")->where("deleted_at IS NULL")->toArray();
                return print json_encode($courses);
            } catch (\Throwable $th) {
                throw new HandlerException($th->getMessage(), 400);
            }
        }
    }