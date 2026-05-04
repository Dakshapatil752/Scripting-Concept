<?php
class MyException extends Exception {}

try {
    $age = 15;

    if ($age < 18) {
        throw new MyException("Not eligible");
    }

    echo "Eligible";
}
catch (MyException $e) {
    echo "Custom Error: " . $e->getMessage();
}
?>