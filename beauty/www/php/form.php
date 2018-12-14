<?
$addresses = array(
    'info@beautydayufa.ru',
);
 
if (isset($_REQUEST['name']) && !empty($_REQUEST['name'])){
//    if (!empty($_REQUEST['span'])){
        $name = $_REQUEST['name'];
        $phone = $_REQUEST['phone'];
        $email = $_REQUEST['email'];
        $mess = $_REQUEST['mess'];
        $send = "Имя: ".$name.". Телефон: ".$phone.". E-mail:".$email." Сообщение: ".$mess;
        $to= implode(', ', $addresses);
        $from = "no-replay@beautydayufa.ru";
        $subject = "Обратная связь";
        $headers = "From: $from\r\nReplay-To: $from\r\nContent-type: text/plain; charset=utf-8\r\n";
        mail($to, $subject, $send, $headers);
//    }
}
?>