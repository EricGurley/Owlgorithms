<?php

    if (isset($_POST["submit"])) {

        $username = $_POST["username"];
        $password = $_POST["password"];

        require_once '../PHP/connect_to_database.php';
        require_once '../PHP/functions.php';

        if(login_empty($username, $password) !== false) {
            header("location: ../HTML/login.html?error=missinganinput");
            exit();
        }

        login($conn, $username, $password);
    }
    else {
        header("location: ../HTML/login.html");
        exit();
    }