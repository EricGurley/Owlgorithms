<?php

    if (isset($_POST["submit"])) {

        $username = $_POST["username"];
        $password = $_POST["password"];

        require_once 'connect_to_database.php';
        require_once 'functions.php';

        login($conn, $username, $password);
    }
    else {
        header("location: ../HTML/login.html?loginfailed");     // This keeps triggering for some reason
        exit();
    }