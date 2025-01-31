
<?php
include 'connect.php';

include "connect.php";

          $name = $age = $address = "";
          
        //Form validation is being declared here
        function testInput($data) {
            $trimed = trim($data);
            $slached = stripslashes($trimed);
            $htmlched = htmlspecialchars($slached);
            return $htmlched;
          }
            
        $firstname = testInput($_REQUEST['firstname']);
        $lastname = testInput($_REQUEST['lastname']);
        $email = testInput($_REQUEST['email']);
        $address = testInput($_REQUEST['address']);


          //Sending to database
         echo "<br>";
          // echo $firstname . "<br>";  
          // echo $lastname . "<br>";
          // echo $email . "<br>";  
          // echo $address. "<br>";

        
        //Passport upload
        // $target_dir = "fileupload/";
        // $target_file = $target_dir . basename($_FILES["passport"]["name"]);

        // if(move_uploaded_file($_FILES["passport"]["tmp_name"], $target_file)){
        //   echo "Passport uploaded successfully";
        // } else {
        //   echo "Error uploading passport";
        // }
        
      ?>
      
      <?php
      $stmt = $conn->prepare("INSERT INTO mycustomers (firstname, lastname, address, email) VALUES (?, ?, ?, ?)");

      $stmt->bind_param("ssss", $firstname, $lastname, $address, $email);
      
      $stmt->execute();
      ?>