<?php
    include_once 'header.php';
?>

<body>
    


    <div class = "wrapper">
        <h1> Account Information </h1>
        <br>

        <div class="label">
            Username: <?php echo $_SESSION['username']; ?>
        </div>

        <div class="label">
            Email: <?php echo $_SESSION['email']; ?>
        </div>

        <div class="label">
            Account Number: <?php echo $_SESSION['id_number']; ?>
        </div>

        <div class="label">
            Change Theme: Coming Soon!
        </div>

        <!-- 

        Themes:
        
        Alexandria
        Ethereal
        Slayer

        -->

    </div>

    <script src = "index.js"> </script>
</body>
</html>