<?php
    include_once 'Main/header.php';
?>

<head>
    <meta charset="UTF-8">
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href = "style.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>

<body>

    <div class = "header">
        <h1> Owlgorithms </h1>
    </div>

    <!--
    Level 4
    -->

    <div class = "level" id = "four">

    <button type = "button" class = "tree_button" id = "struct_pointers">
        Struct Pointers
    </button>

    <button type = "button" class = "tree_button" id = "structs">
        Structs
    </button>

    <button type = "button" class = "tree_button" id = "pointers">
        Pointers
    </button>

    </div>

    <!--
    Level 3
    -->

    <div class = "level" id = "three">

    <button type = "button" class = "tree_button" id = "functions">
        Functions
    </button>

    </div>

    <!--
    Level 2
    -->

    <div class = "level" id = "two">

        <button type = "button" class = "tree_button" id = "for">
            For
        </button>

        <button type = "button" class = "tree_button" id = "while">
            While
        </button>

    </div>

    <!--
    Level 1
    -->

    <div class = "level" id = "one">

        <button type = "button" class = "tree_button" id = "if_else">
            If / Else
        </button>

        <a href = "Main/print.php">
            <button type = "button" class = "tree_button" id = "print">
            Print
            </button>
        </a>
        
    </div>
    

    <script src = "index.js"> </script>
</body>
</html>