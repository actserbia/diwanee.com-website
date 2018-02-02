<?php
$to = preg_replace( '/\/showreel\//i', '/studio/', $_SERVER['REQUEST_URI']);
//var_dump($to);
header("Location: " . $to);
