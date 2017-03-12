<?php
$response = array('sent' => false);
if (!(empty($_POST['email']) || empty($_POST['message']))) {
  $email = urlencode($_POST['email']);
  $message = urlencode($_POST['msg']);
  $to      = 'hi@yusuffadairo.com';
  $subject = 'Hello from ' . $email .' at northeastcontracting.ca';
  $headers = 'From: info@northeastcontracting.ca' . "\r\n" .
    'Reply-To: info@northeastcontracting.ca' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
  
  $response['sent'] = mail($to, $subject, $message, $headers);
}
echo json_encode($response);
?>