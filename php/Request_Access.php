<?php
    $submitted = !empty($_POST);        //Form submit suscessful if POST array not empty
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $f_or_s = $_POST['f_or_s'];
    $reason = $_POST['reason'];


    echo "<p>Form submitted sucessfully (1 for true): $submitted <p>";
    echo "<p>Frist name recieved: $first_name </p>";
    echo "<p>Last name recieved: $last_name </p>";
    echo "<p>Email recieved: $email </p>";
    echo "<p>Fac or student recieved: $f_or_s </p>";
    echo "<p>Reason recieved: $reason </p>";

?>