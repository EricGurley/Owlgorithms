<?php

    if (isset($_POST["submit"])) {
        
        // $username = $_POST['username'];
        // $password = $_POST['password'];
        // $email = $_POST['email'];
    
        echo "Registration successful!";
    }
    else {
        header("location : HTML\signup.html");
    }