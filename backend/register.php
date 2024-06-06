<?php

// Database credentials
$servername = "localhost";
$username = "root"; // change this to your database username
$password = ""; // change this to your database password
$dbname = "user_registration";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$usernameOrEmail = $_POST['username-email'];
$password = $_POST['password'];
$confirmPassword = $_POST['confirm-password'];

// Validate form data
if (empty($usernameOrEmail) || empty($password) || empty($confirmPassword)) {
    die("Please fill all required fields.");
}

if ($password !== $confirmPassword) {
    die("Passwords do not match.");
}

// Check if the input is an email
if (filter_var($usernameOrEmail, FILTER_VALIDATE_EMAIL)) {
    $email = $usernameOrEmail;
    $username = "";
} else {
    $username = $usernameOrEmail;
    $email = "";
}

// Hash the password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Insert user into the database
$stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $email, $hashedPassword);

if ($stmt->execute()) {
    echo "Registration successful.";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
