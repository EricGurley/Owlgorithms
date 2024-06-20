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
        <h1> Account Information </h1>
        <br>

        <div class="label">
            Username: <?php echo $_SESSION['username']; ?>
        </div>

        <div class="label">
            Email Address: <?php echo $_SESSION['email']; ?>
        </div>

        <div class="label">
            Account Number: <?php echo $_SESSION['id_number']; ?>
        </div>

        <div class="label">
            Change Theme: Coming Soon!
        </div>

    </div>

    <script src = "index.js"> </script>
</body>
</html>