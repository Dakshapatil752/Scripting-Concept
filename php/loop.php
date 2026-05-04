<?php
if (isset($_POST['submit'])) {
    $num = (int)$_POST['num'];

    echo "For Loop:<br>";
    for ($i = 1; $i <= $num; $i++) {
        echo $i . "<br>";
    }

    echo "<br>While Loop:<br>";
    $i = 1;
    while ($i <= $num) {
        echo $i . "<br>";
        $i++;
    }
}
?>

<form method="post">
    Enter number: <input type="number" name="num">
    <input type="submit" name="submit">
</form>