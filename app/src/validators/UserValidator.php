<?php
namespace App\validators;

use Exception;

    class UserValidator {

        static public function full_name(string | null $full_name): void {
            try {
                if(empty($full_name) || preg_match('/[0-9]/', $full_name)) { 
                    throw new Exception("Nome completo inválido.");
                }
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        static public function login(string | null $login): void {
            try {
                if(empty($login)) { 
                    throw new Exception("Login inválido.");
                }

                if(strlen($login) < 5) {
                    throw new Exception("Login deve conter mínimo de 5 caracteres");
                }
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        static public function email(string | null $email): void {
            try {
                if(empty($email) || !preg_match('/[@.]/', $email)) { 
                    throw new Exception("Email inválido.");
                }

                if(strlen($email) < 5) { 
                    throw new Exception("Email muito curto.");
                }
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        static public function password(string | null $password): void {
            try {
                if(empty($password)) { 
                    throw new Exception("Senha inválido.");
                }

                if(strlen($password) < 8) {
                    throw new Exception("A senha deve conter mínimo de 8 caracteres");
                }
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        static public function birth(string | null $birth): void {
            try {
                if(empty($birth) || strlen($birth) != 10) { 
                    throw new Exception("Data de nascimento inválido.");
                }
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        static public function phone(string | null $phone): void {
            try {
                if(empty($phone)) { 
                    throw new Exception("Telefone inválida.");
                }
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        static public function address(string | null $address): void {
            try {
                if(empty($address)) { 
                    throw new Exception("Endereço inválido.");
                }
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        static public function cep(string | null $cep): void {
            try {
                if(empty($cep) || strlen($cep) != 9) { 
                    throw new Exception("Cep inválido.");
                }
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        static public function district(string | null $district): void {
            try {
                if(empty($district)) { 
                    throw new Exception("Bairro inválido.");
                }
            } catch (\Throwable $th) {
                throw $th;
            }
        }

        static public function city(string | null $city): void {
            try {
                if(empty($city)) { 
                    throw new Exception("Cidade inválido.");
                }
            } catch (\Throwable $th) {
                throw $th;
            }
        }
        static public function state(string | null $state): void {
            try {
                if(empty($state)) { 
                    throw new Exception("Estado inválido.");
                }
            } catch (\Throwable $th) {
                throw $th;
            }
        }
    }