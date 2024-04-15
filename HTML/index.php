<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel = "stylesheet" href = "../style.css">
</head>
<body>
    <?php if (isset($_SESSION["id_number"])) { ?>
        <h1>Logged in!</h1>
        
    <?php } else { ?>
        <div class="login_signup_container">
            Login or sign up!
            <a class = "btn" href = "login.html"> Login </a>
            <a class = "btn" href = "signupmain.php"> Sign up </a>
        </div>
    <?php } ?>

    <div class = "header">
        <h1> Space Programming Website </h1>
    </div>
    
    <div class = "languages">
        <a class = "btn" href = "c.html"> C </a>
        <a class = "btn" href = "cpp.html"> C++ </a>

        <!-- TODO: Language selection buttons -->
        <!-- <img src = "Images/Language Hexagon.png">
        <button class = "btn"> C </button> -->

        <!-- <img src = "Images/Language Hexagon.png">
        <button class = "btn"> C++ </button> -->
    </div>

    <script src = "index.js"> </script>
</body>
</html>