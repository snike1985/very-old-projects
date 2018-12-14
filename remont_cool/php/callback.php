<?php
$json_data = str_replace("\r\n",'',$json_data);
$json_data = str_replace("\n",'',$json_data);

$name = $_GET['name'];
$tel = $_GET['phone'];
$time = $_GET['time'];


$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: absolut@absolut-sev.ru\r\n";
$message = "Имя: ".$name;
$message .= ", Тел: ".$tel;
$message .= ", Удобное время для звонка: ".$time;
mail("tsurko@mail.ru", "Заявка с сайта", $message, $headers);

echo $name;
echo $tel;

exit;
?>

