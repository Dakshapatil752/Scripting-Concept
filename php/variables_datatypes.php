<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];   // string
    $age = (int)$_POST['age']; // integer
    $height = (float)$_POST['height']; // float
    $isStudent = ($_POST['student'] == "yes"); // boolean

    echo "Name: $name <br>";
    echo "Age: $age <br>";
    echo "Height: $height <br>";
    echo "Student: " . ($isStudent ? "Yes" : "No");
}
?>

<form method="post">
    Name: <input type="text" name="name"><br>
    Age: <input type="number" name="age"><br>
    Height: <input type="text" name="height"><br>
    Student (yes/no): <input type="text" name="student"><br>
    <input type="submit" name="submit">
</form>