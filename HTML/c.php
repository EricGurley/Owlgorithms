<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel = "stylesheet" href = "../style.css">
</head>
<body>
    <?php if (isset($_SESSION["username"])) { ?>
        <div class="login_signup_container">
            <a class = "btn" href = "index.php"> Profile </a>
            <a class = "btn" href = "../PHP/logout.php"> Sign Out </a>
        </div>
        
    <?php } else { ?>
        <div class="login_signup_container">
            <a class = "btn" href = "login.html"> Login </a>
            <a class = "btn" href = "signupmain.php"> Sign up </a>
        </div>
    <?php } ?>

    <div class = "header">
    <h1> C </h1>
    </div>

    <div class = "home">
        <a href = "index.php"> Home </a>
    </div>

    <script src = "index.js"> </script>
</body>
</html>