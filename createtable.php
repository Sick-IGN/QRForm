<?php
  //Creates database connection as var 'db'
  require 'authinfo.php';

  if ($db->connectError) {
    $connectErrors = array(
      'errors' => true,
      'errno' => mysqli_connect_errno(),
      'error' => mysqli_connect_error()
    );
  } else {

    $json = json_decode($_POST['formValues'], true);
    $query = 'create table "formResults" (';

    $query .= '"id" INT unsigned NOT NULL AUTO_INCREMENT,'
    
    for ($i = 0; i < count($json); $i++) {
      $query .= $json[$i]['name'];
      $query .= ' ';
      $query .= $json[$i]['type'];
      $query .= ',';
    }

    $query .= 'PRIMARY KEY ("id"));'

    $statement = $db->prepare($query);
    $statement->execute();
    $statement->close();
    $db->close();
  }
?>