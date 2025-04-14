<?php   // First line of PHP code written at 10:53 A.M. on 4/12/2024
        // File created on 10:50 A.M. on 4/12/2024
        // Database created on 11:09 A.M. on 4/12/2024

        // To anyone viewing the github, the current version of this file is not public, as it contains sensitive
        // information that is required to run on the actual internet instead of my computer, which previously
        // did not require said sensitive data

        $servername = "localhost";
        $database_username = "root";
        $database_password = "";
        $database_name = "space programming website";

        $conn = mysqli_connect($servername, $database_username, $database_password, $database_name);

        if(!$conn) {
                die('Connection failed: ' .mysqli_connect_error());
        }
        