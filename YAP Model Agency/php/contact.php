<?php
/*
* File used to send the email message
*/

/* ==== Config ==== */
$to = 'username@gmail.com';
$cc = '';
$success_message = "Message Successfully Sent";
$failed_message  = "Error sending message";
$subject = !empty($_POST['subject']) ? $_POST['subject'] : 'Subject Here';
/* === End Config === */



/* ==== Headers ==== */
$headers = "From: " . strip_tags($_POST['email']) . "\r\n";
$headers .= "Reply-To: ". strip_tags($_POST['email']) . "\r\n";
if(!empty($cc))
	$headers .= "CC: " . $cc . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

/* ==== Message ==== */
$message .= !empty($_POST['name']) ? 'Name: ' . $_POST['name'] . "\r\n" : '';
$message .= !empty($_POST['email']) ? 'Email: ' . $_POST['email'] . "\r\n" : '';
$message .= !empty($_POST['subject']) ? 'Subject: ' . $_POST['subject'] . "\r\n" : '';
$message = !empty($_POST['message']) ? $_POST['message'] . "\r\n" : 'No Message' . "\r\n";
if(mail($to, $subject, $message, $headers))
	echo $success_message;
else
	echo $failed_message;