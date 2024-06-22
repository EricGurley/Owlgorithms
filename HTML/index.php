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
            <a class = "btn" href = "login.php"> Login </a>
            <a class = "btn" href = "signupmain.php"> Sign up </a>
        </div>
    <?php } ?>

    <div class = "header">
        <h1> Owlgorithms </h1>
    </div>

    <!-- 
    
    Website Names:
    
    Owlgorithms
    Plug and pray
    Why is it not working
    My code is not working
    Cry while coding
    Coding makes me cry
    I hate coding
    Suffering by coding
    I want to quit coding
    
    
    -->
    
    <div class = "languages">
        <a class = "btn" href = "c.php"> C </a>
        <!-- <a class = "btn" href = "cpp.php"> C++ </a> -->

        <!-- TODO: Language selection buttons -->
        <!-- <img src = "Images/Language Hexagon.png">
        <button class = "btn"> C </button> -->

        <!-- <img src = "Images/Language Hexagon.png">
        <button class = "btn"> C++ </button> -->
    </div>

    <script src = "index.js"> </script>
</body>
</html>