<?php
include './mysql.php';

// Check if the connection is successful
if (!$mySQL) {
    die('Database connection error: ' . mysqli_connect_error());
}

$query = "SELECT * FROM crew";
$result = mysqli_query($mySQL, $query);

if (!$result) {
    die('Query failed: ' . mysqli_error($mySQL));
}

$crewData = array();
while ($row = mysqli_fetch_assoc($result)) {
    $crewData[] = $row;
}

mysqli_close($mySQL);

header('Content-Type: application/json');
echo json_encode($crewData);
