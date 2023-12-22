<?php

    $router->mount("/api", function() use ($router) {

        // Auth
        $router->setNamespace("\App\modules\auth");
        $router->mount("/auth", function() use ($router) {
            $router->post("/signUp","AuthController@signUp");
        });

    });