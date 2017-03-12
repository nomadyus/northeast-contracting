<?php
$response = array('sent' => false);
if (!(empty($_POST['email']) || empty($_POST['message']))) {  
  $email = $_POST['email'];
  $message = "A visitor has contacted you with the following message:\r\n\n". $_POST['message'] . "\r\n\nCheers,\r\nNortheast General Contracting Inc.";
  $to      = 'hi@yusuffadairo.com';
  $subject = 'Hello from ' . $email .' at northeastcontracting.ca';
  $headers = 'From: "Northeast General Contracting Inc." <info@northeastcontracting.ca>' . "\r\n" .
    'Reply-To: info@northeastcontracting.ca' . "\r\n" .
    'X-Mailer: PHP/' . phpversion() . "\r\n";
  
  $response['sent'] = mail($to, '=?utf-8?B?'.base64_encode($subject).'?=', $message, $headers);
}
echo json_encode($response);
?>