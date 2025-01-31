

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <?php include 'header.php';?>
    <h2>Welcome to Project Management</h2>
    <h1>Sign Up</h1>
    <p>Please fill out the form below to create an account.</p>

    <form method="post" action="app.php"  enctype="multipart/form-data">
      <!-- Passport: <input type="file" name="passport" id="passport" /><br /> -->

      firstname: <input type="text" name="firstname" /><br />
      lastname: <input type="text" name="lastname" /><br />
      Email: <input type="text" name="email" /><br />
      Address: <input type="text" name="address" /><br />
      <input type="submit" />
    </form>
    <?php include 'footer.php';?>
  </body>
</html>



