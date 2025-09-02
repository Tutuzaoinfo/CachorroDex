<?php
header("Content-Type: application/json");

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://dog.ceo/api/breeds/image/random");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); 

$response = curl_exec($ch);

if ($response === false) {
    echo json_encode(["status" => "error", "message" => curl_error($ch)]);
} else {
    echo $response;
}

curl_close($ch);
?>