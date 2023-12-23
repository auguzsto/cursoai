<?php
error_reporting(0); // SET 0 FOR PROD, SET -1 FOR DEVELOPEMENT

    $router->mount("/api", function() use ($router) {

        // Auth
        $router->setNamespace("\App\modules\auth");
        $router->mount("/auth", function() use ($router) {
            $router->post("/signUp","AuthController@signUp");
        });

    });