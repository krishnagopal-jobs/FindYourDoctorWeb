<?php

include("HttpClient.class.php");

$pageContents = HttpClient::quickGet('http://localhost:8080/customers/branches/'.$_GET['branchName']);

echo $pageContents;

?>