<?php
include("HttpClient.class.php");

$inputJSON = file_get_contents('php://input');

// $client = new HttpClient('localhost', '8080');

//  $client->setContentType('application/json'); 

//  $client->post('/findYourDoctor/physicians', $inputJSON);

//  $pageContents = $client->getContent();

//  $status = $client->getStatus();

//  header($status, true, $status);

$pageContents = HttpClient::quickPost('http://localhost:8080/findYourDoctor/physicians', $inputJSON);

echo $pageContents;

?>