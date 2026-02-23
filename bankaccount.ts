const input = require("prompt-sync")();

class BankAccount {
    accountHolder: string;
    accountNumber: number;
    balance: number;

    constructor(holder: string, accNo: number, bal: number) {
        this.accountHolder = holder;
        this.accountNumber = accNo;
        this.balance = bal;
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

    display(): void {
        console.log("\n===== ACCOUNT DETAILS =====");
        console.log("Name:", this.accountHolder);
        console.log("Account Number:", this.accountNumber);
        console.log("Balance:", this.balance);
    }
}

// Take input
let accountHolderName: string = input("Enter Account Holder Name: ");
let accNo: number = Number(input("Enter Account Number: "));
let balance: number = Number(input("Enter Initial Balance: "));

let account = new BankAccount(accountHolderName, accNo, balance);

let depositAmount: number = Number(input("Enter Deposit Amount: "));
account.deposit(depositAmount);

let withdrawAmount: number = Number(input("Enter Withdraw Amount: "));
account.withdraw(withdrawAmount);

account.display();