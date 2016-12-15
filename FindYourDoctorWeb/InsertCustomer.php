<?php
include("HttpClient.class.php");

$inputJSON = file_get_contents('php://input');

//$pageContents = HttpClient::quickPost('http://localhost:8080/customers/', $inputJSON);

// $data = array("name" => "Hagrid", "age" => "36");
// $data_string = json_encode($data);
 
$ch = curl_init('http://localhost:8080/customers');
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $inputJSON);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
		'Content-Type: application/json',
		'Content-Length: ' . strlen($inputJSON)),
		'Accept: application/json'
		);
 
$result = curl_exec($ch);

echo $result;

?>