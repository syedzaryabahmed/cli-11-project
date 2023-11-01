#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
class BankAccount {
    name;
    balance;
    constructor(name) {
        this.name = name;
        this.balance = 10000;
    }
    setName(name) {
        this.name = name;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(chalk.green(`Deposited $${amount}. New balance: $${this.balance}`));
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(chalk.green(`Withdrawn $${amount}. New balance: $${this.balance}`));
        }
        else {
            console.log(chalk.red('Insufficient balance.'));
        }
    }
    transfer(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(chalk.green(`Transferred $${amount}. New balance: $${this.balance}`));
        }
        else {
            console.log(chalk.red('Insufficient balance.'));
        }
    }
    makePayment(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(chalk.green(`Payment made: $${amount}. New balance: $${this.balance}`));
        }
        else {
            console.log(chalk.red('Insufficient balance.'));
        }
    }
    payBill(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(chalk.green(`Bill payment made: $${amount}. New balance: $${this.balance}`));
        }
        else {
            console.log(chalk.red('Insufficient balance.'));
        }
    }
    makeOnlinePayment(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(chalk.green(`Online payment made: $${amount}. New balance: $${this.balance}`));
        }
        else {
            console.log(chalk.red('Insufficient balance.'));
        }
    }
    applyLoan(amount) {
        this.balance += amount;
        console.log(chalk.green(`Loan applied: $${amount}. New balance: $${this.balance}`));
    }
    credit(amount) {
        this.balance += amount;
        console.log(chalk.green(`Credit received: $${amount}. New balance: $${this.balance}`));
    }
    chequeTransaction(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(chalk.green(`Cheque transaction: $${amount}. New balance: $${this.balance}`));
        }
        else {
            console.log(chalk.red('Insufficient balance.'));
        }
    }
    displayBalance() {
        console.log(chalk.yellow(`Account balance: $${this.balance}`));
    }
}
const bankAccount = new BankAccount('');
const transactionChoices = [
    'Deposit',
    'Withdraw',
    'Transfer',
    'Make Payment',
    'Pay Bill',
    'Make Online Payment',
    'Apply Loan',
    'Credit',
    'Cheque Transaction',
];
const transactionQuestions = [
    {
        type: 'list',
        name: 'transaction',
        message: 'Choose a transaction:',
        choices: transactionChoices,
    },
    {
        type: 'input',
        name: 'amount',
        message: 'Enter the transaction amount:',
        validate: (input) => {
            if (isNaN(parseFloat(input))) {
                return 'Please enter a valid amount.';
            }
            return true;
        },
        when: (answers) => transactionChoices.includes(answers.transaction),
    },
];
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Enter your name:',
    },
])
    .then((answers) => {
    bankAccount.setName(answers.name);
    inquirer.prompt(transactionQuestions)
        .then((answers) => {
        switch (answers.transaction) {
            case 'Deposit':
                bankAccount.deposit(parseFloat(answers.amount));
                break;
            case 'Withdraw':
                bankAccount.withdraw(parseFloat(answers.amount));
                break;
            case 'Transfer':
                bankAccount.transfer(parseFloat(answers.amount));
                break;
            case 'Make Payment':
                bankAccount.makePayment(parseFloat(answers.amount));
                break;
            case 'Pay Bill':
                bankAccount.payBill(parseFloat(answers.amount));
                break;
            case 'Make Online Payment':
                bankAccount.makeOnlinePayment(parseFloat(answers.amount));
                break;
            case 'Apply Loan':
                bankAccount.applyLoan(parseFloat(answers.amount));
                break;
            case 'Credit':
                bankAccount.credit(parseFloat(answers.amount));
                break;
            case 'Cheque Transaction':
                bankAccount.chequeTransaction(parseFloat(answers.amount));
                break;
            default:
                console.log(chalk.red('Invalid transaction.'));
        }
        bankAccount.displayBalance();
    });
    inquirer.prompt({
        type: 'confirm',
        name: 'continue',
        message: 'Do you want to make another transaction?',
    })
        .then((answers) => {
        if (answers.continue) {
            // Prompt the user for the next transaction
            inquirer.prompt(transactionQuestions)
                .then((answers) => {
                // Perform the transaction
            });
        }
        else {
            // Exit the script
            console.log('Thank you for using the Bank Account script.');
            process.exit(0);
        }
    });
});
