<?php

namespace App\core;

use Exception;

    class Controller {

        public function db(): Database {
            $db = Database::getInstance();

            if(!$db) {
                header("HTTP/1.1 500");
                throw new Exception("Erro na conexão com banco de dados");
            }

            return Database::getInstance();
        }
        public function request(): mixed {
            $data = json_decode(file_get_contents('php://input'), true);

            if(empty($data)) {
                header("HTTP/1.1 400");
                throw new Exception("Erro ao enviar os dados");
            }

            return $data;
        }
    }