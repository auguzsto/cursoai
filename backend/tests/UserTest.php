<?php

use App\models\User;
use App\validators\UserValidator;
use PHPUnit\Framework\TestCase;

    class UserTest extends TestCase {

        public function testCanBeCreatedFromMap(): void {
            $map = [
                "id" => 1,
                "login" => "testunit",
                "is_administratator" => false,
                "full_name" => "Test Unit",
                "email" => "tests.unit@tests.com",
                "password" => "testpassword2024@",
                "birth" => "1975-10-30",
                "phone" => "21983623711",
                "address" => "Street Tests Units",
                "cep" => "00000000",
                "district" => "Tests",
                "city" => "PHP Tests Units",
                "state" => "RJ"
            ];

            $user = User::fromMap($map);
            $this->assertInstanceOf(User::class, $user);
        }

        public function testCanCreatedFromValidLogin(): void {
            $login = "phpunit";
            $this->assertNull(UserValidator::login($login));
        }

        public function testCannotBeCreatedFromInvalidLogin() : void {
            $this->expectException(Exception::class);
            $login = "*#$@!^~#901295";
            UserValidator::login($login);
        }

        public function testCannotBeCreatedFromEmptyLogin() : void {
            $this->expectException(Exception::class);
            $login = "";
            UserValidator::login($login);
        }

        public function testCanCreatedFromValidFullname(): void {
            $full_name = "PHP Unit tests";
            $this->assertNull(UserValidator::full_name($full_name));
        }

        public function testCannotBeCreatedFromInvalidFullname() : void {
            $this->expectException(Exception::class);
            $full_name = "*#$@!^~#901295";
            UserValidator::full_name($full_name);
        }

        public function testCannotBeCreatedFromEmptyFullname() : void {
            $this->expectException(Exception::class);
            $full_name = "";
            UserValidator::full_name($full_name);
        }

        public function testCanCreatedFromValidEmail(): void {
            $email = "tests.unit@ttests.com";
            $this->assertNull(UserValidator::email($email));
        }

        public function testCannotBeCreatedFromEmptyEmail() : void {
            $this->expectException(Exception::class);
            $email = "";
            UserValidator::email($email);
        }

        public function testCanCreatedFromValidPassword(): void {
            $password = "testpassword2024@";
            $this->assertNull(UserValidator::password($password));
        }

        public function testCannotBeCreatedFromInvalidPassword() : void {
            $this->expectException(Exception::class);
            $password = "test";
            UserValidator::password($password);
        }

        public function testCannotBeCreatedFromEmptyPassword() : void {
            $this->expectException(Exception::class);
            $password = "";
            UserValidator::password($password);
        }

        public function testCanCreatedFromValidBirth(): void {
            $birth = "1975-10-30";
            $this->assertNull(UserValidator::birth($birth));
        }

        public function testCannotBeCreatedFromInvalidBirth() : void {
            $this->expectException(Exception::class);
            $birth = "1@#$/+]/?!";
            UserValidator::birth($birth);
        }

        public function testCannotBeCreatedFromEmptyBirth() : void {
            $this->expectException(Exception::class);
            $birth = "";
            UserValidator::birth($birth);
        }

        public function testCanCreatedFromValidPhone(): void {
            $phone = "99999999999";
            $this->assertNull(UserValidator::phone($phone));
        }

        public function testCannotBeCreatedFromInvalidPhone() : void {
            $this->expectException(Exception::class);
            $phone = "1@#$/+]/?!~";
            UserValidator::phone($phone);
        }

        public function testCannotBeCreatedFromEmptyPhone() : void {
            $this->expectException(Exception::class);
            $phone = "";
            UserValidator::phone($phone);
        }

        public function testCanCreatedFromValidAddress(): void {
            $address = "Street Unit Tests, 254";
            $this->assertNull(UserValidator::address($address));
        }

        public function testCannotBeCreatedFromEmptyAddress() : void {
            $this->expectException(Exception::class);
            $address = "";
            UserValidator::address($address);
        }

        public function testCanCreatedFromValidCep(): void {
            $cep = "00000000";
            $this->assertNull(UserValidator::cep($cep));
        }

        public function testCannotBeCreatedFromInvalidCep() : void {
            $this->expectException(Exception::class);
            $cep = "1@#$/+]/?!~";
            UserValidator::cep($cep);
        }

        public function testCannotBeCreatedFromEmptyCep() : void {
            $this->expectException(Exception::class);
            $cep = "";
            UserValidator::cep($cep);
        }

        public function testCanCreatedFromValidDiscrict(): void {
            $district = "Bairro Bairro";
            $this->assertNull(UserValidator::district($district));
        }

        public function testCannotBeCreatedFromInvalidDiscrict() : void {
            $this->expectException(Exception::class);
            $district = "1@#$/+]/?!~";
            UserValidator::district($district);
        }
        
        public function testCannotBeCreatedFromEmptyDiscrict() : void {
            $this->expectException(Exception::class);
            $district = "";
            UserValidator::district($district);
        }

        public function testCanCreatedFromValidState(): void {
            $state = "RJ";
            $this->assertNull(UserValidator::state($state));
        }

        public function testCannotBeCreatedFromInvalidState() : void {
            $this->expectException(Exception::class);
            $state = "1@#$/+]/?!~";
            UserValidator::state($state);
        }
        
        public function testCannotBeCreatedFromEmptyState() : void {
            $this->expectException(Exception::class);
            $state = "";
            UserValidator::state($state);
        }

    }