<?php
include("HttpClient.class.php");

$pageContents = HttpClient::quickGet('http://localhost:8080/hello');

echo $pageContents;

?>

