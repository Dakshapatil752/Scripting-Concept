<?php
if (isset($_POST['submit'])) {
    $marks = (int)$_POST['marks'];

    if ($marks >= 75) {
        echo "Distinction";
    } elseif ($marks >= 60) {
        echo "First Class";
    } elseif ($marks >= 40) {
        echo "Pass";
    } else {
        echo "Fail";
    }
}
?>

<form method="post">
    Enter Marks: <input type="number" name="marks">
    <input type="submit" name="submit">
</form>