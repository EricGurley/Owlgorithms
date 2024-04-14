<?php
    function anything_empty($username, $password, $password_repeat, $email) {
        $result;
        if (empty($username) || empty($password) || empty($password_repeat) || empty($email)) {
            $result = true;
        }
        else {
            $result = false;
        }
        return $result;
    }
    function invalid_username($username) {
        $result;
        if (!preg_match("/^[a-zA-Z0-9 ]+$/", $username)) {
            $result = true;
        }
        else {
            $result = false;
        }
        return $result;
    }
    function username_already_exists($conn, $username, $email) {
        $sql = "SELECT * FROM users WHERE id_number = ? OR email = ?;";
        $stmt = mysqli_stmt_init($conn);

        if(!mysqli_stmt_prepare($stmt, $sql)) {
            header("location: ../HTML/signupmain.php?error=stmtfailed");
            exit();
        }

        mysqli_stmt_bind_param($stmt, "ss", $username, $email);
        mysqli_stmt_execute($stmt);

        $result_data = mysqli_stmt_get_result($stmt);

        if ($row = mysqli_fetch_assoc($result_data)) {
            return $row;
        }
        else {
            $result = false;
            return $result;
        }

        mysqli_stmt_close($stmt);
    }
    function passwords_match($password, $password_repeat) {
        $result;
        if ($password !== $password_repeat) {
            $result = true;
        }
        else {
            $result = false;
        }
        return $result;
    }
    function invalid_email($email) {
        $result;
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $result = true;
        }
        else {
            $result = false;
        }
        return $result;
    }
    function create_user($conn, $username, $password, $email) {
        $sql = "INSERT INTO users (username, user_password, email) VALUES (?, ?, ?);";
        $stmt = mysqli_stmt_init($conn);

        if(!mysqli_stmt_prepare($stmt, $sql)) {
            header("location: ../HTML/signupmain.php?error=stmtfailed");
            exit();
        }

        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        mysqli_stmt_bind_param($stmt, "sss", $username, $hashed_password, $email);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_close($stmt);

                                                                // TODO: Fix this
        header("location: ../HTML/signupmain.php?error=none");  // This is triggering even when errors occur
        exit();
    }

    // Login functions

    function login_empty($username, $password) {
        $result;
        if (empty($username) || empty($password)) {
            $result = true;
        }
        else {
            $result = false;
        }
        return $result;
    }
    
    function login($conn, $username, $password) {
        $username_already_exists = username_already_exists($conn, $username, $username);
        
        if ($username_already_exists === false) {
            header("location: ../HTML/login.html?error=loginfailed");
            exit();
        }

        $password_hashed = $username_already_exists["user_password"];
        $check_password = password_verify($password, $password_hashed);
        
        if ($check_password === false) {
            header("location: ../HTML/login.html?error=loginfailed");
            exit();
        }
        else if ($check_password === true) {
            session_start();
            $_SESSION["id_number"] = $username_already_exists["id_number"];
            $_SESSION["username"] = $username_already_exists["username"];
            echo "<p>Login successful!</p>";
            // header("location: ../HTML/login.html");
            exit();
        }
    }
