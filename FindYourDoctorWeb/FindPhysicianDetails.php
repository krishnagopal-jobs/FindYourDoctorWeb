<?php
include("HttpClient.class.php");

$pageContents = HttpClient::quickGet('http://localhost:8080/findYourDoctor/physicians/physicianId?'.$_SERVER['QUERY_STRING']);

echo $pageContents;

?>