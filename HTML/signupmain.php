<?php
    include_once 'header.php';
?>

<body>

    <?php if (isset($_SESSION["username"])) { ?>
        <div class="login_signup_container">
            <a class = "btn" href = "profile.php"> Profile </a>
            <a class = "btn" href = "../PHP/logout.php"> Sign Out </a>
        </div>
        
    <?php } else { ?>
        <div class="login_signup_container">
            <a class = "btn" href = "index.php"> Home </a>
            <a class = "btn" href = "login.php"> Login </a>
        </div>
    <?php } ?>

    <div class = "wrapper">

        <form action = "../PHP/signup.php" method = "post">
            <h1> Register </h1>

            <div class = "input_box">
                <input type = "text" placeholder = "Create a username"
                id = "username" name = "username" required>
                <i class = 'bx bx-user'></i>
            </div>

            <div class = "input_box">
                <input type = "password" placeholder = "Choose a password"
                id = "password" name = "password" required>
                <i class = 'bx bx-lock-alt' ></i>
            </div>

            <div class = "input_box">
                <input type = "password" placeholder = "Verify your password"
                id = "password_repeat" name = "password_repeat" required>
                <i class = 'bx bx-lock-alt' ></i>
            </div>

            <div class = "input_box">
                <input type = "text" placeholder = "Enter your email"
                id = "email" name = "email" required>
                <i class='bx bx-envelope'></i>
            </div>

            <button type = "submit" class = "btn" name = "submit"> Register </button> <br>

        </form>
    </div>

    <?php
        if (isset($_GET["error"])) {
            $error = $_GET["error"];
            if ($error == "invalidusername") {
                echo "<p> That username is invalid! </p>";
            } 
            else if ($error == "usernamealreadyexists") {
                echo "<p> Username is already taken! </p>";
            }
            else if ($error == "emailalreadyexists") {
                echo "<p> Email is already taken! </p>";
            } 
            else if ($error == "passwordsdonotmatch") {
                echo "<p> Passwords do not match! </p>";
            } 
            else if ($error == "invalidemail") {
                echo "<p> That email address is invalid! </p>";
            } 
            else if ($error == "stmtfailed") {
                echo "<p> A technical error has occured, please try again later! </p>";
            } 
            else if ($error == "none") {
                echo "<p> Registration successful! </p>";
            }
        }
    ?>

    <script src = "index.js"> </script>
</body>
</html>