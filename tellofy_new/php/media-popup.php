<?php
$id = $_GET['id'];// номер блока

$json_data = '{
                "items": "<div class=\"press-media__description\">

                            <img src=\"pic/press-media1.jpg\" width=\"367\" height=\"290\" alt=\"\">

                            <span class=\"press-media__title\">Ut euismod pretium felis, at porta ligula feugiat vitae
                                ullamcorper.</span>

                            <div class=\"press-media__info\">
                                <time datetime=\"2015-09-02\">2 SEP</time> Susan Doyle
                            </div>

                            <p>Ut euismod pretium felis, at porta ligula feugiat vitae. Suspendisse non nibh ullamcorper
                                quam commodo gravida a in odio. Suspendisse ultricies nec nibh elementum ultrices. Ut
                                tincidunt lacus est, non porta orci lacinia a. Fusce metus sem, laoreet eu elit et,
                                feugiat tincidunt quam. Donec semper blandit nulla vel euismod. Pellentesque efficitur
                                vehicula leo. Proin viverra vulputate viverra. Donec malesuada dolor arcu. Pellentesque
                                mollis ipsum at purus venenatis ullamcorper. Vestibulum imperdiet ante et orci
                                porttitor, vehicula luctus urna sodales.</p>

                            <p>Morbi orci elit, aliquam eu ligula nec, faucibus finibus turpis. Sed iaculis magna neque,
                                vitae bibendum lacus vulputate interdum. Pellentesque scelerisque feugiat orci, id
                                dapibus velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lacus
                                vel tellus fermentum ornare. Curabitur interdum nisl vitae augue porttitor, sit amet
                                condimentum mauris iaculis. Maecenas sagittis, justo ac laoreet pulvinar, lacus lorem
                                convallis libero, eget iaculis diam enim a diam. Duis facilisis faucibus arcu vel
                                suscipit. Aliquam sagittis odio neque, in mollis nisi volutpat ac. Nulla laoreet sem
                                nec elementum facilisis. Phasellus placerat, mauris facilisis accumsan sagittis, odio
                                nunc interdum magna, ultrices volutpat metus magna ut ante. Vivamus vestibulum dolor
                                quis nunc iaculis posuere. Aliquam urna augue, tincidunt a molestie et, finibus et nunc.
                                Mauris gravida lectus eget nunc venenatis elementum.</p>

                            <p>Curabitur eleifend pharetra ligula ut facilisis. Etiam sollicitudin felis ipsum, a ornare
                                orci placerat eu. Nullam imperdiet, sapien id fringilla bibendum, sapien ipsum facilisis
                                sapien, in elementum ante purus vel mi. Ut ullamcorper ipsum lorem, et auctor enim
                                mattis id. Aenean in leo eget urna tristique lobortis. Sed efficitur tortor vitae mi
                                elementum elementum. Vivamus convallis, sapien eget vulputate congue, turpis odio
                                posuere orci, vitae venenatis arcu arcu vitae enim. Quisque in porta orci. Vivamus
                                rhoncus sapien quis eros posuere mattis. Nunc lacus sem, congue eu dignissim non,
                                semper ac odio. Pellentesque eleifend turpis tortor, vitae elementum eros luctus ac.
                                Donec nec consequat ante, in aliquam eros. In vehicula vestibulum nunc, sed finibus dui
                                varius sit amet. Cras et interdum ligula, et interdum tellus. Praesent maximus enim
                                ante, ut convallis ante egestas in. Praesent aliquam rutrum odio eu porta.</p>
                        </div>

                    </div>"
}';


$json_data = str_replace("\r\n",'',$json_data);
$json_data = str_replace("\n",'',$json_data);

echo $json_data;
exit;
?>