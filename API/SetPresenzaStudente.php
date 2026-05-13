<?php
$myfile = fopen("dbconf.txt", "r") or die("Unable to open file!");
$servername = trim(fgets($myfile));
$username = trim(fgets($myfile));
$password = trim(fgets($myfile));
$dbname = trim(fgets($myfile));
fclose($myfile);

// Connessione al DB
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$nome = $_GET['nome'];
$cognome = $_GET['cognome'];
$classe = $_GET['classe'];
$data = $_GET['data'];

$sql = "UPDATE studenti
        SET presenza = 1
        WHERE nome = '". $nome . "' and cognome = '" . $cognome . "' and classe = '" . $classe . "' and OpenDayDate = '" . $data . "'";

$result = $conn->query($sql);

if ($result) {
    echo json_encode(true);
} else {
    echo json_encode(false);
}

$conn->close();
?>