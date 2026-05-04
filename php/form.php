<?php
$name = "";
$email = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];

    echo "<h3>Form Submitted Successfully</h3>";
    echo "Name: " . $name . "<br>";
    echo "Email: " . $email . "<br>";
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>PHP Form</title>
</head>
<body>

<h2>User Registration Form</h2>

<form method="post">
    Name: <input type="text" name="name" required><br><br>
    Email: <input type="email" name="email" required><br><br>

    Gender:
    <input type="radio" name="gender" value="Male"> Male
    <input type="radio" name="gender" value="Female"> Female<br><br>

    Course:
    <select name="course">
        <option value="BCA">BCA</option>
        <option value="BSc">BSc</option>
        <option value="MCA">MCA</option>
    </select><br><br>

    <input type="submit" value="Submit">
</form>

</body>
</html>