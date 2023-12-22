<?php
namespace App\modules\users;

use Exception;

    class UserValidator {

        static public function full_name(string $full_name): void {
            try {
                if(empty($full_name) || preg_match('/[0-9]/', $full_name)) { 
                    throw new Exception("Nome completo inválido.");
                }
            } catch (\Throwable $th) {
                header('HTTP/1.1 400');
                throw $th;
            }
        }

        static public function login(string $login): void {
            try {
                if(empty($login)) { 
                    throw new Exception("Login inválido.");
                }

                if(strlen($login) < 5) {
                    throw new Exception("Login deve conter mínimo de 5 caracteres");
                }
            } catch (\Throwable $th) {
                header('HTTP/1.1 400');
                throw $th;
            }
        }

        static public function email(string $email): void {
            try {
                if(empty($email)) { 
                    throw new Exception("Email inválido.");
                }

                if(strlen($email) <= 5) { 
                    throw new Exception("Email inválido");
                }
            } catch (\Throwable $th) {
                header('HTTP/1.1 400');
                throw $th;
            }
        }

        static public function password(string $password): void {
            try {
                if(empty($password)) { 
                    throw new Exception("Senha inválido.");
                }

                if(strlen($password) < 8) {
                    throw new Exception("A senha deve conter mínimo de 8 caracteres");
                }
            } catch (\Throwable $th) {
                header('HTTP/1.1 400');
                echo $th->getMessage();
            }
        }

        static public function birth(string $birth): void {
            try {
                if(empty($birth)) { 
                    throw new Exception("Data de nascimento inválido.");
                }
            } catch (\Throwable $th) {
                header('HTTP/1.1 400');
                echo $th->getMessage();
            }
        }

        static public function phone(string $phone): void {
            try {
                if(empty($phone)) { 
                    throw new Exception("Telefone inválida.");
                }
            } catch (\Throwable $th) {
                header('HTTP/1.1 400');
                echo $th->getMessage();
            }
        }

        static public function address(string $address): void {
            try {
                if(empty($address)) { 
                    throw new Exception("Endereço inválido.");
                }
            } catch (\Throwable $th) {
                header('HTTP/1.1 400');
                echo $th->getMessage();
            }
        }

        static public function cep(string $cep): void {
            try {
                if(empty($cep)) { 
                    throw new Exception("Cep inválido.");
                }
            } catch (\Throwable $th) {
                header('HTTP/1.1 400');
                echo $th->getMessage();
            }
        }

        static public function district(string $district): void {
            try {
                if(empty($district)) { 
                    throw new Exception("Bairro inválido.");
                }
            } catch (\Throwable $th) {
                header('HTTP/1.1 400');
                echo $th->getMessage();
            }
        }

        static public function city(string $city): void {
            try {
                if(empty($city)) { 
                    throw new Exception("Cidade inválido.");
                }
            } catch (\Throwable $th) {
                header('HTTP/1.1 400');
                echo $th->getMessage();
            }
        }
        static public function state(string $state): void {
            try {
                if(empty($state)) { 
                    throw new Exception("Estado inválido.");
                }
            } catch (\Throwable $th) {
                header('HTTP/1.1 400');
                echo $th->getMessage();
            }
        }
    }