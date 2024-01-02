<?php 
include './mysql.php';

$title = mysqli_real_escape_string($mySQL, $_POST['title']);
$destination = mysqli_real_escape_string($mySQL, $_POST['destination']);
$seafareDescription = mysqli_real_escape_string($mySQL, $_POST['description']);
$startDate = mysqli_real_escape_string($mySQL, $_POST['start_date']);
$endDate = mysqli_real_escape_string($mySQL, $_POST['end_date']);
$startTime = mysqli_real_escape_string($mySQL, $_POST['start_time']);
$endTime = mysqli_real_escape_string($mySQL, $_POST['end_time']);
$price = mysqli_real_escape_string($mySQL, $_POST['price']);
$seafareArea = mysqli_real_escape_string($mySQL, $_POST['seafare_area']);
$captain = mysqli_real_escape_string($mySQL, 1);

$response = "INSERT INTO seafares (title, destination, seafare_description, start_date, end_date, start_time, end_time, price, seafare_area, captain, complete) VALUES ('$title', '$destination', '$seafareDescription', '$startDate', '$endDate', '$startTime', '$endTime', '$price', '$seafareArea', '$captain', '0')";

if ($mySQL->query($response) === TRUE) {
  echo "success";
} else {
  echo "Error: " . $response . "<br>" . $mySQL->error;
}

$mySQL->close();

?>