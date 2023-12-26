<?php

use App\modules\sessions\Session;
error_reporting(0); // SET 0 FOR PROD, SET -1 FOR DEVELOPEMENT

    $router->before("GET|POST", "/", function() {
        Session::hasExpired();
    });

    $router->get("/", function() {
        echo "Root view with middleware";
    });