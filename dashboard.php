<?php 
include './mysql.php';

// Check if the connection is successful
if (!$mySQL) {
  die('Database connection error: ' . mysqli_connect_error());
}

$query = "SELECT * FROM seafares WHERE captain=3";
$result = mysqli_query($mySQL, $query);

if (!$result) {
  die('Query failed: ' . mysqli_error($mySQL));
}

$seafareData = array();
while ($row = mysqli_fetch_assoc($result)) {
  $seafareData[] = $row;
}

mysqli_close($mySQL);

header('Content-Type: application/json');
echo json_encode($seafareData);


?>