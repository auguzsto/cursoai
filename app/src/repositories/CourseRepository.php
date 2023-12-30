<?php
namespace App\repositories;
use App\core\Repository;


    class CourseRepository extends Repository {
        
        function __construct() {
            $this->table = "courses";
        }
    }