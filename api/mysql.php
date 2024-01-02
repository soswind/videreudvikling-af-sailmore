<?php

$server = "mysql3.unoeuro.com";
$username = "soswind_dk";
$password = "t2rzG4Akab9eHB6fwRgD";
$database = "soswind_dk_db";

$mySQL = new mysqli($server, $username, $password, $database);

if(!$mySQL) {
    die("Could not connect to the MySQL server: " . mysqli_connect_error());
}

?>