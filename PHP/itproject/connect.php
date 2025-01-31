<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "itstudents";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

// $sql = "CREATE DATABASE itstudents";
// $conn->query($sql)

// $createTable = "CREATE TABLE MyLastTable (
// id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
// firstname VARCHAR(30) NOT NULL,
// lastname VARCHAR(30) NOT NULL,
// email VARCHAR(50),
// reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
// )";

// $insert = "INSERT INTO MyGuests (firstname, lastname, email)
// VALUES ('Johnson', 'Doeokay', 'jonson@example.com')";
// $insert = "INSERT INTO MyGuests (firstname, lastname, email)
// VALUES ('John', 'Doe', 'john@example.com');";
// $insert .= "INSERT INTO MyGuests (firstname, lastname, email)
// VALUES ('Mary', 'Moe', 'mary@example.com');";
// $insert .= "INSERT INTO MyGuests (firstname, lastname, email)
// VALUES ('Julie', 'Dooley', 'julie@example.com')";

// if($conn->multi_query($insert)){
//   echo "New record created successfully";
// }else{
//   echo "Error: " . "<br>" . $conn->error;
// };

// if($conn->query($createTable)){
//   echo "Table MyGuests created successfully";
// }else{
//   echo "Error creating table: " . $conn->error;
// };

?>