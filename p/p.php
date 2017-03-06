<?php
if (!(empty($_GET['email']) || empty($_GET['msg']))) {
  $email = $_GET['email'];
  $message = $_GET['msg'];
  $to      = 'hi@yusuffadairo.com';
  $subject = 'Hello from ' . $email .' at northeastcontracting.ca';
  $headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
  
  echo mail($to, $subject, $message, $headers);
} else {
  echo false;
}
?>