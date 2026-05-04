<?php
if (isset($_POST['click'])) {
    echo "Button Clicked! Hello, " . $_POST['name'];
}
?>

<form method="post">
    Enter Name: <input type="text" name="name">
    <input type="submit" name="click" value="Click Me">
</form>