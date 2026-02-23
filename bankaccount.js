var input = require("prompt-sync")();
var BankAccount = /** @class */ (function () {
    function BankAccount(holder, accNo, bal) {
        this.accountHolder = holder;
        this.accountNumber = accNo;
        this.balance = bal;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Amount Deposited:", amount);
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log("Insufficient Balance!");
        }
        else {
            this.balance -= amount;
            console.log("Amount Withdrawn:", amount);
        }
    };
    BankAccount.prototype.display = function () {
        console.log("\n===== ACCOUNT DETAILS =====");
        console.log("Name:", this.accountHolder);
        console.log("Account Number:", this.accountNumber);
        console.log("Balance:", this.balance);
    };
    return BankAccount;
}());
// Take input
var accountHolderName = input("Enter Account Holder Name: ");
var accNo = Number(input("Enter Account Number: "));
var balance = Number(input("Enter Initial Balance: "));
var account = new BankAccount(accountHolderName, accNo, balance);
var depositAmount = Number(input("Enter Deposit Amount: "));
account.deposit(depositAmount);
var withdrawAmount = Number(input("Enter Withdraw Amount: "));
account.withdraw(withdrawAmount);
account.display();
