<?php
// System info
phpinfo();

// Variables
$name = "Collin";
$age = 20;
echo "<h2>Hello, my name is $name and I am $age years old.</h2>";

// isset and empty
if (isset($name)) {
    echo "<p>'name' is set.</p>";
}
if (!empty($age)) {
    echo "<p>'age' is not empty.</p>";
}

// Superglobal example
echo "<p>Server Name: " . $_SERVER['SERVER_NAME'] . "</p>";

// Condition
if ($age > 18) {
    echo "<p>You are an adult.</p>";
}

// Loop
for ($i = 1; $i <= 3; $i++) {
    echo "<p>Loop iteration $i</p>";
}

// Array
$fruits = array(1 => "Apple", 2 => "Banana", 3 => "Cherry");
echo "<pre>";
print_r($fruits);
echo "</pre>";
?>
