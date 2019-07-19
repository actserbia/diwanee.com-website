<?php
session_start();
$headers = getallheaders();
header("Access-Control-Allow-Headers: content-type");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Origin: $headers[Origin]");
header("Content-Type: application/json,; charset=UTF-8");

$_SESSION["loged"] = false;
echo json_encode(array(status=>'ok'));