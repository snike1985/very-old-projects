<?php
$id = $_GET['id'];

$json_data = '{
                "data-cart-item-key": "weqe234eq4caszdfac",
                "cart-menu__pic": "<img width=\"41\" height=\"57\" src=\"localhost/outsiders/wp-content/uploads/2015/12/color3.jpg\" class=\"attachment-full size-full wp-post-image\" alt=\"color3\">",
                "product-title_hebrew": "111",
                "product-title_english": "111",
                "product__price": "100.00"
}';


$json_data = str_replace("\r\n",'',$json_data);
$json_data = str_replace("\n",'',$json_data);

echo $json_data;
exit;
?>