<?php
session_start();
$headers = getallheaders();
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Origin: $headers[Origin]");
header("Content-Type: application/json,; charset=UTF-8");


// if($_SERVER['REQUEST_METHOD']==='POST' && empty($_POST)) {
//   echo "eeeee";
//   $_POST = json_decode(file_get_contents('php://input'), true);  // all exept 'Content-Type':'multipart/form-data' 'Content-Type':'application/x-www-form-urlencoded'
// }

if ( $_SERVER['REQUEST_METHOD'] === "POST" && $_SERVER["CONTENT_TYPE"] === "application/x-www-form-urlencoded") {
  
  if ($_POST['user'] == 'developer' && $_POST['pass'] == 'jobs') {
    $_SESSION["loged"] = true;
    echo json_encode(array(status=>'ok'));
  }
  else {
    $_SESSION["loged"] = false;
    http_response_code(403);
    echo json_encode(array(status=>'Username or password is incorrect!'));
  }
}
else {
  $_SESSION["loged"] = false;
  http_response_code(403);
  echo json_encode(array(status=>'This endpoint accept only POST method and application/x-www-form-urlencoded Content-Type!'));
}
