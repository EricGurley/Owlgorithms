<?php
    include_once 'header.php';
?>

<body>
    <?php (isset($_SESSION["username"]))  ?>
        <div class="login_signup_container">
            <a class = "btn" href = "index.php"> Home </a>
            <a class = "btn" href = "../PHP/logout.php"> Sign Out </a>
        </div>

    <div class = "wrapper">
        <h1> Personal Information </h1>
        <br>

        <div class="label">
            Username: 
        </div>

        <div class="label">
            Email Address:
        </div>

        <div class="label">
            Password: 
        </div>

        <div class="label">
            Change Theme: Coming Soon!
        </div>

    </div>

    <script src = "index.js"> </script>
</body>
</html>