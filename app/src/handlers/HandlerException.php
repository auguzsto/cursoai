<?php
namespace App\handlers;

use Exception;

    class HandlerException extends Exception {
        public function __construct(string $message, int $code) {
            $this->message = $message;
            $this->code = $code;
            $this->handlers();
        }

        private function handlers(): void {
            if(str_contains($this->message, "Sessão não encontrada")) {
                $this->code = 410;
            }
            if(str_contains($this->message, "Sessão expirada")) {
                $this->code = 410;

            }
            if(str_contains($this->message, "SQLSTATE[HY000] [2002]")) {
                $this->code = 500;
            }
            
            if(str_contains($this->message, "SQLSTATE[HY000] [1045]")) {
                $this->code = 500;
            }

            if(str_contains($this->message, "SQLSTATE[23000]")) {
                $this->code = 409;
            }
            
            header("HTTP/1.1 ". $this->code);
            echo json_encode([
                "error" => $this->message,
            ]);
        }
    }