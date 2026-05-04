<?php
if (isset($_POST['submit'])) {
    $input = $_POST['numbers'];
    $arr = explode(",", $input);

    echo "Array Elements:<br>";
    foreach ($arr as $num) {
        echo trim($num) . "<br>";
    }
}
?>

<form method="post">
    Enter numbers (comma separated): 
    <input type="text" name="numbers">
    <input type="submit" name="submit">
</form>