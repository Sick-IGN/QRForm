<?php

  //Creates database connection as var 'db'
  require 'authinfo.php'

  if ($db->connectError) {
    $connectErrors = array(
      'errors' => true,
      'errno' => mysqli_connect_errno(),
      'error' => mysqli_connect_error()
    );
  } else {

    $json = json_decode($_POST, true);
    echo $json;
    $query = 'insert into formResults (';

    $query += $json[0].name;
    for ($i = 1; i < count($_POST); $i++) {
      $query += ',';
      $query += $json[i].name;
    }

    $query += ') values (';

    $query += $json[0].name;
    for ($i = 1; i < count($json); $i++) {
      $query += ',';
      $query += $json[i].name;
    }
    $query += ')';

    $statement = $db->prepare($query);
    $statement->execute();
    $statement->close();
    $db->close();
  }
?>