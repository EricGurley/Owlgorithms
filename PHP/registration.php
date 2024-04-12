<?php

    ob_start();

    if (isset($_POST["submit"])) {
        
        // $username = $_POST['username'];
        // $password = $_POST['password'];
        // $email = $_POST['email'];
    
        echo "Registration successful!";
    }
    else {
        include '../HTML/signup.html';
    }

    $output = ob_get_clean(); // Get the buffered output
    echo $output; // Output the buffered content