<?php
error_reporting(0); // SET 0 FOR PROD, SET -1 FOR DEVELOPEMENT

    $router->get("/", function() {
        echo "Root view";
    });