<?php
    session_start();
    $on_home;
    $on_profile;
    $on_login;
    $on_signup;

    /*  For local hosting

    $home_page = "/space programming website/index.php";
    $profile_page = "/space programming website/HTML/profile.php";
    $login_page = "/space programming website/HTML/login.php";
    $signup_page= "/space programming website/HTML/signupmain.php";

    */

    // For the internet

    $home_page = "/index.php";
    $profile_page = "/Main/profile.php";
    $login_page = "/Main/login.php";
    $signup_page = "/Main/signupmain.php";
    
    // $current_page = $_SERVER['PHP_SELF'];
    $current_page = $_SERVER['REQUEST_URI'];
    //echo $current_page;

    if ($current_page == $home_page) {
        $on_home = True;
    }
    else {
        $on_home = False;
    }

    if ($current_page == $profile_page) {
        $on_profile = True;
    }
    else {
        $on_profile = False;
    }

    if ($current_page == $login_page) {
        $on_login = True;
    }
    else {
        $on_login = False;
    }

    if ($current_page == $signup_page) {
        $on_signup = True;
    }
    else {
        $on_signup = False;
    }
?>

<head>
    <meta charset="UTF-8">
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href = "../style.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <?php if (isset($_SESSION["username"]) and $on_home == True) { ?>
        <div class="login_signup_container">
            <a class = "btn" href = "Main/profile.php"> Profile </a>
            <a class = "btn" href = "Functions/logout.php"> Sign Out </a>
        </div>
    
    <?php } else if (isset($_SESSION["username"]) and $on_profile == True) { ?>
        <div class="login_signup_container">
            <a class = "btn" href = "../index.php"> Home </a>
            <a class = "btn" href = "../Functions/logout.php"> Sign Out </a>
        </div>
    
    <?php } else if (!isset($_SESSION["username"]) and $on_login == True) { ?>
        <div class="login_signup_container">
            <a class = "btn" href = "../index.php"> Home </a>
            <a class = "btn" href = "signupmain.php"> Sign Up </a>
        </div>
    
    <?php } else if (!isset($_SESSION["username"]) and $on_signup == True) { ?>
        <div class="login_signup_container">
            <a class = "btn" href = "../index.php"> Home </a>
            <a class = "btn" href = "login.php"> Login </a>
        </div>
        
    <?php } else { ?>
        <div class="login_signup_container">
            <a class = "btn" href = "Main/login.php"> Login </a>
            <a class = "btn" href = "Main/signupmain.php"> Sign Up </a>
        </div>
    <?php } ?>

</head>
</html>