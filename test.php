<?php
    $db = new PDO(
        'mysql:host=127.0.0.1;dbname=elevatorProject',
        'pi',
        'ese'
    );

    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

    echo "<p>Inserting into Database</p>";
    echo "<br/>";
    $query = 'INSERT INTO elevatorNetwork (date,time,nodeID,status,currentFloor,requestedFloor) VALUES("2020-06-12","01:11:50",5,1,1,1)';
    $result = $db->exec($query);
    var_dump($result);
    echo "<br/>";
    $error = $db->errorInfo()[2];
    var_dump($error);
    echo "<br/>";

    echo "<p>Database values</p>";
    echo "<br/>";

    $rows = $db->query('SELECT * FROM elevatorNetwork ORDER BY nodeID');
    foreach ($rows as $row){
        var_dump($row);
        echo "<br/>";
        echo "<br/>";
    }
?>