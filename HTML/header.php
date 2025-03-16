<?php
    session_start();
    $on_profile;
    $profile_page = "/space programming website/HTML/profile.php";
    $current_page = $_SERVER['PHP_SELF'];

    if ($current_page == $profile_page) {
        $on_profile = True;
    }
    else {
        $on_profile = False;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel = "stylesheet" href = "../style.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <?php if (isset($_SESSION["username"]) and $on_profile == False) { ?>
        <div class="login_signup_container">
            <a class = "btn" href = "profile.php"> Profile </a>
            <a class = "btn" href = "../PHP/logout.php"> Sign Out </a>
        </div>
    
    <?php } else if (isset($_SESSION["username"]) and $on_profile == True) { ?>
        <div class="login_signup_container">
            <a class = "btn" href = "index.php"> Home </a>
            <a class = "btn" href = "../PHP/logout.php"> Sign Out </a>
        </div>
        
    <?php } else { ?>
        <div class="login_signup_container">
            <a class = "btn" href = "login.php"> Login </a>
            <a class = "btn" href = "signupmain.php"> Sign up </a>
        </div>
    <?php } ?>

</head>