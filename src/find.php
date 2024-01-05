<?php
header("Access-Control-Allow-Origin: *");
$conn = new mysqli("localhost", "root", "guigui66", "tx_wendang");


if(!$conn){
    die("数据库连接失败" . mysqli_connect_error());
}

$sql = "SELECT 来源,公司,供应商,采购时间,采购内容 FROM use_0";
$result = $conn->query($sql);


if ($result->num_rows > 0) {
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    echo json_encode($data, JSON_UNESCAPED_UNICODE);
} else {
    echo "0 结果";
}

$conn->close();
?>