<?php

use App\core\Migrations;

    require __DIR__ . "/vendor/autoload.php";
    require __DIR__ . "/app/routes/router.php";

    Migrations::auto("23012024_2129.sql");