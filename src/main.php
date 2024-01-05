<?php 

$laiyuan = $_POST['laiyuan'];
$gongsi = $_POST['gongsi'];
$gongying = $_POST['gongying'];
$shijian = $_POST['shijian'];
$neirong = $_POST['neirong'];
if (!empty($laiyuan) || !empty($gongsi) || !empty($gongying) || !empty($shijian) || !empty($neirong)) {
    $conn = mysqli_connect("localhost","root","guigui66","tx_wendang");
    if(!$conn){
        die("数据库连接失败" . mysqli_connect_error());
    }
    $sql = "INSERT INTO use_0 (来源,公司,供应商,采购时间,采购内容) VALUES ('$laiyuan','$gongsi','$gongying','$shijian','$neirong')";

    if(mysqli_query($conn,$sql)){
        echo '数据插入成功';
    } else {
        echo "失败： " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
} else {
    echo '';
}
?>