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

$sql = "SELECT nome,cognome,classe,OpenDayDate,presenza
        FROM Studenti";

$result = $conn->query($sql);

$studenti = [];

if ($result && $result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $studenti[] = $row;
    }
    echo json_encode($studenti);
}else {
    echo json_encode(null);
}

$conn->close();
?>