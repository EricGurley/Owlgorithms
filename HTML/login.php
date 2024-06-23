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
            <a class = "btn" href = "signupmain.php"> Sign up </a>
        </div>
    <?php } ?>
    
    <div class = "wrapper">
        <form action = "../PHP/login.php" method = "post">
            <h1> Login </h1>
            <div class = "input_box">
                <input type = "text" name = "username" 
                placeholder = "Username" required>
                <i class = 'bx bx-user'></i>
            </div>

            <div class = "input_box">
                <input type = "password" name = "password" 
                placeholder = "Password" required>
                <i class = 'bx bx-lock-alt' ></i>
            </div>

            <div class = "remember_forgot">
                <label>
                    <!-- <input type = "checkbox"> Remember me </label> -->
                    <!-- <a href = "#"> Forgot password? </a> -->
            </div>
            
            <button type = "submit" name = "submit" class = "btn"> Login </button>

        </form>
    </div>
    
    <script src = "index.js"> </script>
</body>
</html>