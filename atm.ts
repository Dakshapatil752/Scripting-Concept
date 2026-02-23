const input = require("prompt-sync")();

class ATM {
    balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    checkBalance(): void {
        console.log("Current Balance:", this.balance);
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log("Amount Deposited:", amount);
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient Balance!");
        } else {
            this.balance -= amount;
            console.log("Amount Withdrawn:", amount);
        }
    }
}

// Take initial balance
let initialBalance: number = Number(input("Enter Initial Balance: "));
let atm = new ATM(initialBalance);

let choice: number;

do {
    console.log("\n===== ATM MENU =====");
    console.log("1. Check Balance");
    console.log("2. Deposit");
    console.log("3. Withdraw");
    console.log("4. Exit");

    choice = Number(input("Enter your choice: "));

    switch (choice) {
        case 1:
            atm.checkBalance();
            break;

        case 2:
            let depositAmount: number = Number(input("Enter amount to deposit: "));
            atm.deposit(depositAmount);
            break;

        case 3:
            let withdrawAmount: number = Number(input("Enter amount to withdraw: "));
            atm.withdraw(withdrawAmount);
            break;

        case 4:
            console.log("Thank you for using ATM 😊");
            break;

        default:
            console.log("Invalid Choice!");
    }

} while (choice !== 4);