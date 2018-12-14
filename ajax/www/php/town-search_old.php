<?php

    $searchText = $_POST["searchText"];

    if (strlen($searchText) == 1 or $searchText=='all'){
        $json_data = '<li>Москва<span>Владимирская Область</span></li>
            <li>Питер<span>Владимирская Область</span></li>
            <li>Гурзуф<span>Владимирская Область</span></li>
            <li>Киев<span>Владимирская Область</span></li>
            <li>Питер<span>Владимирская Область</span></li>
            <li>Гурзуф<span>Владимирская Область</span></li>
            <li>Киев<span>Владимирская Область</span></li>
            <li>Питер<span>Владимирская Область</span></li>
            <li>Гурзуф<span>Владимирская Область</span></li>';
    }
    else if(strlen($searchText) == 2){
        $json_data = '<li>Москва<span>Владимирская Область</span></li>
            <li>Питер<span>Владимирская Область</span></li>
            <li>Гурзуф<span>Владимирская Область</span></li>
            <li>Питер<span>Владимирская Область</span></li>
            <li>Гурзуф<span>Владимирская Область</span></li>';
    }
    else if(strlen($searchText) == 3){
        $json_data = '<li>Москва<span>Владимирская Область</span></li>
            <li>Питер<span>Владимирская Область</span></li>';
    }
    else {
        $json_data = '';
    }


    $json_data = str_replace("\r\n",'',$json_data);
    $json_data = str_replace("\n",'',$json_data);

    echo $json_data;
    exit;
?>

