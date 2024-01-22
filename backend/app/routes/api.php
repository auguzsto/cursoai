<?php
    
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Accept');
    header('Access-Control-Max-Age: 86400');

    $router->mount("/api", function() use ($router) {

        $router->setNamespace("\App\controllers");

        // Auth
        $router->mount("/auth", function() use ($router) {
            $router->post("/signIn","AuthController@signIn");
            $router->post("/signUp","AuthController@signUp");
            $router->post("/signOut","AuthController@signOut");
            $router->get("/session", "SessionController@expired");
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
            $router->get("/id/(.*)","CourseController@findById");
            $router->post("/create","CourseController@create");
            $router->patch("/update/(.*)","CourseController@update");
            $router->delete("/delete/(.*)","CourseController@delete");
            $router->post("/subscribe","CourseUserController@subscribe");
            $router->get("/subscribe/user/(.*)","CourseUserController@findSubscribeByUserId");
        });

    });