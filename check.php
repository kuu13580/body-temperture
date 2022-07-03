<?php
// フォームからの受取
$name = $_POST["name"];
$date = $_POST["date"];
$time = $_POST["time"];
$temperature = $_POST["temperature"];
$text = "\n".'"'.$name.'","'.$date.'","'.$time.'","'.$temperature.'"';

file_put_contents("check.csv",$text,FILE_APPEND|LOCK_EX);
echo '<p style="text-align: center; font-size: xx-large;">送信しました</p>';

http_response_code(301);
header("Location: aftersubmit.html");
exit;
?>