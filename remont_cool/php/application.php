<?php
$json_data = str_replace("\r\n",'',$json_data);
$json_data = str_replace("\n",'',$json_data);

$name = $_GET['name'];
$tel = $_GET['phone'];


$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: absolut@absolut-sev.ru\r\n";
$message = "Имя: ".$name;
$message .= ", Тел: ".$tel;
mail("tsurko@mail.ru", "Заявка с сайта", $message, $headers);

echo $name;
echo $tel;

exit;
?>

