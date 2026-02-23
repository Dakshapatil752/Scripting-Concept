var input = require("prompt-sync")();
var ATM = /** @class */ (function () {
    function ATM(initialBalance) {
        this.balance = initialBalance;
    }
    ATM.prototype.checkBalance = function () {
        console.log("Current Balance:", this.balance);
    };
    ATM.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Amount Deposited:", amount);
    };
    ATM.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log("Insufficient Balance!");
        }
        else {
            this.balance -= amount;
            console.log("Amount Withdrawn:", amount);
        }
    };
    return ATM;
}());
// Take initial balance
var initialBalance = Number(input("Enter Initial Balance: "));
var atm = new ATM(initialBalance);
var choice;
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
            var depositAmount = Number(input("Enter amount to deposit: "));
            atm.deposit(depositAmount);
            break;
        case 3:
            var withdrawAmount = Number(input("Enter amount to withdraw: "));
            atm.withdraw(withdrawAmount);
            break;
        case 4:
            console.log("Thank you for using ATM 😊");
            break;
        default:
            console.log("Invalid Choice!");
    }
} while (choice !== 4);
