<?php
error_reporting(0); // SET 0 FOR PROD, SET -1 FOR DEVELOPEMENT

    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: PATCH, PUT, GET, POST, DELETE');
    header('Access-Control-Allow-Headers: *');
    header('Access-Control-Max-Age: 86400');

    $router->mount("/api", function() use ($router) {

        // Auth
        $router->setNamespace("\App\modules\auth");
        $router->mount("/auth", function() use ($router) {
            $router->post("/signUp","AuthController@signUp");
        });

    });