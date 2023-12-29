<?php
use App\models\Session;
use App\core\Administrator;

    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: PATCH, PUT, GET, POST, DELETE');
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Max-Age: 86400');

    $router->mount("/api", function() use ($router) {

        $router->setNamespace("\App\controllers");

        // Auth
        $router->mount("/auth", function() use ($router) {
            $router->post("/signIn","AuthController@signIn");
            $router->post("/signUp","AuthController@signUp");
            $router->post("/signOut","AuthController@signOut");
        });

        // Courses
        $router->mount("/courses", function() use ($router) {
            //Middleware
            $router->before("GET|POST", "/*", function() {
                Session::hasExpired();
            });

            $router->get("/all","CourseController@findAll");
            $router->post("/create","CourseController@create");
            $router->post("/subscribe","CourseUserController@subscribe");
        });

    });