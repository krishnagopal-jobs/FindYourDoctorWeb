<?php
include("HttpClient.class.php");

$pageContents = HttpClient::quickGet('http://localhost:8080/findYourDoctor/physicians?'.$_SERVER['QUERY_STRING']);

echo $pageContents;
?>