<?php
class Student {
    public $name;
    public $roll;

    function __construct($name, $roll) {
        $this->name = $name;
        $this->roll = $roll;
    }

    function display() {
        return "Name: $this->name, Roll: $this->roll";
    }
}

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $roll = $_POST['roll'];

    $s = new Student($name, $roll);
    echo $s->display();
}
?>

<form method="post">
    Name: <input type="text" name="name"><br>
    Roll No: <input type="number" name="roll"><br>
    <input type="submit" name="submit">
</form>