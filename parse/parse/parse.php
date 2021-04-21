<?php

$servername = "localhost";
$username = "root";
$password = "root";

$conn = new mysqli($servername, $username, $password, 'teremDB');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//создаем базу данных
$sql = "CREATE DATABASE teremDB";

/*if ($conn->query($sql) === TRUE) {
    echo "Databased created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}*/

//создаем таблицу
$sql = "CREATE TABLE test(  
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    value1 INT(6) NOT NULL,
    value2 INT(6) NOT NULL,
    value3 INT(6) NOT NULL
)";

/*if ($conn->query($sql) === TRUE) {
    echo "Table test created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}*/

//получаем данные из нашего файла и создаем записи в БД, если повтор ID - обновляем
$data = file("./parse/data.csv");

foreach ($data as $str) {
    if ($str == $str[0]) continue;
    $el = explode(";", $str);
    $sql = "INSERT INTO test (id, name, value1, value2, value3) 
            VALUES ('$el[0]', '$el[1]', '$el[2]', '$el[3]', '$el[4]')";

    /*if ($conn->query($sql) === TRUE) {
        echo "Record created";
    }*/
}

foreach ($data as $str) {
    if ($str == $str[0]) continue;
    $el = explode(";", $str);
    $sql = "REPLACE INTO test VALUES 
            ('$el[0]', '$el[1]', '$el[2]', '$el[3]', '$el[4]')";

    /*if ($conn->query($sql) === TRUE) {
        echo "Record updated";
    }*/
}

?>