<?php
// Simple, non-production example. Do not deploy as-is.
// Add proper sanitization, CSRF, rate limiting, SMTP, etc. for real usage.

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo 'Method Not Allowed';
  exit;
}

function clean($value) {
  return trim(filter_var($value, FILTER_SANITIZE_STRING));
}

$name = isset($_POST['name']) ? clean($_POST['name']) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL) : false;
$message = isset($_POST['message']) ? clean($_POST['message']) : '';

if (!$name || !$email || !$message) {
  http_response_code(400);
  echo 'Please provide a valid name, email, and message.';
  exit;
}

$to = 'you@example.com'; // TODO: replace with your recipient
$subject = 'New contact form submission';
$headers = 'From: ' . $name . ' <' . $email . ">\r\n" .
           'Reply-To: ' . $email . "\r\n" .
           'Content-Type: text/plain; charset=UTF-8';

$body = "Name: $name\nEmail: $email\n\n$message\n";

if (mail($to, $subject, $body, $headers)) {
  echo 'Thank you! Your message has been sent.';
} else {
  http_response_code(500);
  echo 'Sorry, we could not send your message.';
}


