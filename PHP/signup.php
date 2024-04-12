<?php
    if (isset($_POST["submit"])) {
        
        $username = $_POST["username"];
        $password = $_POST["password"];
        $email = $_POST["email"];
        $password_repeat = $_POST["password_repeat"];

        require_once 'connect_to_database.php';
        require_once 'functions.php';

        if(anything_empty($username, $password, $password_repeat, $email) !== false) {
            header("location: ../HTML/signup.html?error=missinganinput");
            exit();
        }
        if(invalid_username($username) !== false) {
            header("location: ../HTML/signup.html?error=invalidusername");
            exit();
        }
        if(username_already_exists($conn, $username, $email) !== false) {
            header("location: ../HTML/signup.html?error=usernamealreadyexists");
            exit();
        }
        if(passwords_match($password, $password_repeat) !== false) {
            header("location: ../HTML/signup.html?error=passwordsdonotmatch");
            exit();
        }
        if(invalid_email($email) !== false) {
            header("location: ../HTML/signup.html?error=invalidemail");
            exit();
        }
        create_user($conn, $username, $password, $email);
    }
else {
    header("location: ../HTML/signup.html");
    exit();
}