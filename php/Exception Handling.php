<?php
try {
    $num = 10;
    if ($num < 20) {
        throw new Exception("Number is less than 20");
    }
    echo "Number is OK";
}
catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
finally {
    echo "<br>Execution completed";
}
?>