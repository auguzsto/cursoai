<?php

use App\core\Migrations;

    require __DIR__ . "/vendor/autoload.php";
    require __DIR__ . "/app/routes/router.php";

    Migrations::auto("29122023_1555.sql");