<?php
    $submitted = !empty($_POST);        //Form submit suscessful if POST array not empty
    $username = $_POST['username'];
    $password = $_POST['password'];

    echo "<p>Form submitted sucessfully (1 for true): $submitted <p>";
    echo "<p>Username recieved: $username </p>";
    echo "<p>Password recieved: $password </p>";

?>