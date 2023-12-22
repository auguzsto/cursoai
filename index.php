<?php

use App\core\Migrations;

    require __DIR__ . "/vendor/autoload.php";
    require __DIR__ . "/app/routes/router.php";

    error_reporting(0); // SET 0 FOR PROD, SET -1 FOR DEVELOPEMENT
    Migrations::auto("22122023_1308.sql");