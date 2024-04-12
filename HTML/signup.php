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

        <form action = "../PHP/registration.php" method = "post">
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
                required>
                <i class = 'bx bx-lock-alt' ></i>
            </div>

            <div class = "input_box">
                <input type = "text" placeholder = "Enter your email"
                id = "email" name = "email"
                required>
                <i class='bx bx-envelope'></i>
            </div>

            <button type = "submit" class = "btn" name = "submit"> Register </button> <br>
            <div class = "home">
                <a href = "index.html"> Home </a>
            </div>
        </form>
    </div>

    <script src = "index.js"> </script>
</body>
</html>