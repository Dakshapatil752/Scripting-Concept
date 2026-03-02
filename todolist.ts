const input = require("prompt-sync")();

let tasks: string[] = [];
let choice: number;

while (true) {
    console.log("\n===== TO-DO MENU =====");
    console.log("1. Add Task (While Loop)");
    console.log("2. Add Multiple Tasks (For Loop)");
    console.log("3. View Tasks");
    console.log("4. Remove Task");
    console.log("5. Exit");

    choice = Number(input("Enter your choice: "));

    //WHILE LOOP
    if (choice === 1) {

        let addMore: string = "yes";

        while (addMore.toLowerCase() === "yes") {
            let task: string = input("Enter task: ");
            tasks.push(task);

            addMore = input("Do you want to add another task? (yes/no): ");
        }

        console.log("Task(s) Added Successfully!");
    }

    //USING FOR LOOP
    else if (choice === 2) {

        let count: number = Number(input("How many tasks do you want to add? "));

        for (let i = 0; i < count; i++) {
            let task: string = input("Enter task " + (i + 1) + ": ");
            tasks.push(task);
        }

        console.log("Tasks Added Successfully!");
    }

    // VIEW TASKS
    else if (choice === 3) {

        if (tasks.length === 0) {
            console.log("No tasks available.");
        } else {
            console.log("\nYour Tasks:");
            for (let i = 0; i < tasks.length; i++) {
                console.log((i + 1) + ". " + tasks[i]);
            }
        }
    }

    //REMOVE TASK
    else if (choice === 4) {

        if (tasks.length === 0) {
            console.log("No tasks to remove.");
        } else {
            for (let i = 0; i < tasks.length; i++) {
                console.log((i + 1) + ". " + tasks[i]);
            }

            let removeIndex: number = Number(input("Enter task number to remove: ")) - 1;

            if (removeIndex >= 0 && removeIndex < tasks.length) {
                tasks.splice(removeIndex, 1);
                console.log("Task Removed Successfully!");
            } else {
                console.log("Invalid Task Number!");
            }
        }
    }

    else if (choice === 5) {
        console.log("Exiting To-Do Application...");
        break;
    }

    else {
        console.log("Invalid Choice!");
    }
}