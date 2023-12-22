<?php
use Bramus\Router\Router;

    $router = new Router();

    require "api.php";
    require "view.php";

    $router->run();