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

         // Users
         $router->mount("/users", function() use ($router) {
            $router->get("/all","UserController@findAll");
            $router->get("/id/(.*)","UserController@findById");
            $router->post("/create","UserController@create");
            $router->patch("/update/(.*)","UserController@update");
            $router->delete("/delete/(.*)","UserController@delete");
        });

        // Courses
        $router->mount("/courses", function() use ($router) {
            $router->get("/all","CourseController@findAll");
            $router->post("/create","CourseController@create");
            $router->patch("/update/(.*)","CourseController@update");
            $router->delete("/delete/(.*)","CourseController@delete");
            $router->post("/subscribe","CourseUserController@subscribe");
        });

    });