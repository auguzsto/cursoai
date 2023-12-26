<?php

use App\modules\sessions\Session;
use App\modules\users\User;

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