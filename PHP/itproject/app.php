<?php
include "connect.php";

          $name = $age = $address = "";
          
        //Form validation is being declared here
        function testInput($data) {
            $trimed = trim($data);
            $slached = stripslashes($trimed);
            $htmlched = htmlspecialchars($slached);
            return $htmlched;
          }
            
        $name = testInput($_REQUEST['name']);
        $age = testInput($_REQUEST['age']);
        $address = testInput($_REQUEST['address']);


          //Sending to database
         echo "<br>";
        echo $name . "<br>";  
        echo $age . "<br>";
        echo $address . "<br>";  
        
        //Passport upload
        $target_dir = "fileupload/";
        $target_file = $target_dir . basename($_FILES["passport"]["name"]);

        if(move_uploaded_file($_FILES["passport"]["tmp_name"], $target_file)){
          echo "Passport uploaded successfully";
        } else {
          echo "Error uploading passport";
        }
        
      ?>