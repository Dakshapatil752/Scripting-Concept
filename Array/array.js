function arrayOperations() {

    let arr = [];

    // Step 1: array size
    let size = Number(prompt("Enter array size:"));

    // Step 2: array elements
    for (let i = 0; i < size; i++) {
        arr[i] = prompt("Enter element " + (i + 1));
    }

    // Step 3: display array and size
    document.getElementById("output").innerHTML =
        "Initial Array: " + arr + "<br>" +
        "Array Size: " + arr.length + "<br><br>";

    // Step 4: unshift (add at beginning)
    let addChoice = prompt("Do you want to ADD an element at beginning? (yes/no)");
    if (addChoice === "yes") {
        let newElement = prompt("Enter element to add at beginning:");
        arr.unshift(newElement);

        document.getElementById("output").innerHTML +=
            "After unshift(): " + arr + "<br>" +
            "Updated Size: " + arr.length + "<br><br>";
    }

    // Step 5: shift (remove first element)
    let removeChoice = prompt("Do you want to REMOVE first element? (yes/no)");
    if (removeChoice === "yes") {
        let removed = arr.shift();

        document.getElementById("output").innerHTML +=
            "Removed element (shift): " + removed + "<br>" +
            "After shift(): " + arr + "<br>" +
            "Final Size: " + arr.length;
    }
}
