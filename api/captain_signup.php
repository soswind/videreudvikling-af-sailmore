<?php
include './mysql.php';



// Get data from Sign Up form Gast POST method

$firstname = $_POST['captain_first_name'];
$lastname = $_POST['captain_last_name'];
$profile_text = $_POST['captain_profile_text'];
$birthday = $_POST['captain_birthday'];
$email = $_POST['captain_email'];
$address = $_POST['captain_address'];
$zip_code = $_POST['captain_postal_no'];
$city = $_POST['captain_city'];
$phone = $_POST['captain_phone'];
$password = $_POST['captain_password'];

// Check if $password is not null before using password_hash
if ($password !== null) {
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
} else {
    // Handle the case where $password is null (optional)
    $hashedPassword = null;
}

$response = "INSERT INTO crew_profile (first_name, last_name, profile_text, birthday, email, address, zip_code, city, phone_number, password) 
VALUES ('$firstname', '$lastname', '$profile_text', '$birthday', '$email','$address', '$zip_code', '$city', '$phone', '$hashedPassword')";

if ($mySQL->query($response) === TRUE) {
    $result = ["message" => "Bruger oprettet successfuldt"];
} else {
    $result = ["error" => "Fejl ved oprettelse af bruger: " . $mySQL->error];
}

$mySQL->close();

header('Content-Type: application/json');
echo json_encode($result);

exit();

?>