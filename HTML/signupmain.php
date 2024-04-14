<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel = "stylesheet" href = "../style.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
<body>
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
            <div class = "home">
                <a href = "index.php"> Home </a>
            </div>
        </form>
    </div>

    <?php
        if (isset($_GET["error"])) {
            if ($_GET["error"] == "missinganinput") {
                echo "Fill in all fields!";
            }
            else if (isset($_GET["error"]) == "invalidusername") {
                echo "<p>Invalid username!</p>";
            }
            else if (isset($_GET["error"]) == "usernamealreadyexists") {
                echo "<p>Username is already taken!</p>";
            }
            else if (isset($_GET["error"]) == "passwordsdonotmatch") {
                echo "<p>Passwords do not match!</p>";
            }
            else if (isset($_GET["error"]) == "invalidemail") {
                echo "<p>This email address is invalid!</p>";
            }
            else if (isset($_GET["error"]) == "stmtfailed") {
                echo "<p>A technical error has occured, please try again later</p>";
            }
            else if (isset($_GET["error"]) == "none") {
                echo "<p>Registration successful!</p>";
            }
        }
    ?>

    <script src = "index.js"> </script>
</body>
</html>