<?php
    if (isset($_POST["submit"])) {
        
        $username = $_POST["username"];     // uid is username
        $password = $_POST["password"];
        $email = $_POST["email"];
        $password_repeat = $_POST["password_repeat"];

        require_once 'connect_to_database.php';
        require_once 'functions.php';

        if(invalid_username($username) !== false) {
            header("location: ../Main/signupmain.php?error=invalidusername");
            exit();
        }
        else if(invalid_email($email) !== false) {
            header("location: ../Main/signupmain.php?error=invalidemail");
            exit();
        }
        else if(username_already_exists($conn, $username, $username) !== false) {
            header("location: ../Main/signupmain.php?error=usernamealreadyexists");
            exit();
        }
        else if(username_already_exists($conn, $email, $email) !== false) {
            header("location: ../Main/signupmain.php?error=emailalreadyexists");
            exit();
        }
        else if(passwords_match($password, $password_repeat) !== false) {
            header("location: ../Main/signupmain.php?error=passwordsdonotmatch");
            exit();
        }
        else {
            create_user($conn, $username, $password, $email);
        }
    }  
    else {
        header("location: ../Main/signupmain.php");
        exit();
}