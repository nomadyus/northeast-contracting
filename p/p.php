<?php
$response = array('sent' => false);
if (!(empty($_POST['email']) || empty($_POST['message']))) {
  $email = urlencode($_POST['email']);
  $message = urlencode($_POST['msg']);
  $to      = 'hi@yusuffadairo.com';
  $subject = 'Hello from ' . $email .' at northeastcontracting.ca';
  $headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
  
  $response['sent'] = mail($to, $subject, $message, $headers);
}
echo json_encode($response);
?>