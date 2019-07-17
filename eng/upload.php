<?php
 echo($_POST['data']);
if(!empty($_POST['data'])){
    echo($_POST['data']);
    $data = $_POST['data'];
    $fname = rand(20,100).".pdf"; // name the file
    $file = fopen("pdf/" .$fname, 'w'); // open the file path
    fwrite($file, $data); //save data
    // fopen($file);
    fclose($file);
} else {
    echo "No Data Sent";
}
?>