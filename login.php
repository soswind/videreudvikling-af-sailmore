<?php
session_start();
include './mysql.php';
header('Content-Type: application/json');

// Get data from the request body
$data = json_decode(file_get_contents('php://input'), true);

$query = "SELECT * FROM captain_profile WHERE email = ? AND password = ?";
$stmt = $mySQL->prepare($query);
$stmt->bind_param("ss", $data['email'], $data['password']);
$stmt->execute();
$result = $stmt->get_result();

// Example: Check username and password (replace with your authentication logic)
if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();
    $_SESSION['user'] = $user;

    http_response_code(200);
    echo json_encode(['message' => 'Login successful']);
} else {
    http_response_code(401);
    echo json_encode(['message' => 'Login failed']);
}
