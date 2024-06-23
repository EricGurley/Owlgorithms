<?php
    include_once 'header.php';
?>

<body>
    <?php if (isset($_SESSION["username"])) { ?>
        <div class="login_signup_container">
            <a class = "btn" href = "index.php"> Home </a>
            <a class = "btn" href = "index.php"> Profile </a>
            <a class = "btn" href = "../PHP/logout.php"> Sign Out </a>
        </div>
        
    <?php } else { ?>
        <div class="login_signup_container">
            <a class = "btn" href = "login.html"> Login </a>
            <a class = "btn" href = "signupmain.php"> Sign up </a>
        </div>
    <?php } ?>

    




    

    <script src = "index.js"> </script>
</body>
</html>