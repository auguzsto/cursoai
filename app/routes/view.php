<?php

use App\models\User;
use App\models\Session;

    $router->before("GET", "/", function() {
        Session::hasExpired();
    });

    $router->get("/", function() {
        try {
            echo json_encode((array) User::logged());
        } catch (\Throwable $th) {
            throw $th;
        }
    });