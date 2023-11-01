#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// import gradient from 'gradient-string';
// import chalkanimation from "chalk-animation";
interface User {
  type: string;
  username: string;
  user:number
}
const user = await inquirer.prompt([
  {
    type: "input",
    name: "username",
    message: "Enter your  username:",
  },
]);



const answers = await inquirer.prompt([
  {
    type: "input",
    name: "userId",
    message: "Kindly Enter your Id: ",
  },
  {
    type: "number",
    name: "userPin",
    message: "Kindly Enter your four digit pin PIN: ",
  },
  {
    type: "list",
    name: "accountType",
    choices: ["Current ", "Saving"],
    message: "Select your account type:",
  },
  {
    type: "list",
    name: "transactionType",
    choices: ["Fast Cash", "Withdraw"],
    message: "Select your transaction",
    when(answers) {
      return answers.accountType;
    },
  },
  {
    type: "list",
    name: "amount",
    choices: [1000, 2000, 10000, 20000],
    message: "Select your amount",
    when(answers) {
      return answers.transactionType == "Fast Cash";
    },
  },
  {
    type: "number",
    name: "amount",
    message: "Enter your amount",
    when(answers) {
      return answers.transactionType == "Withdraw";
    },
  },
]);
if (answers.userId && answers.userPin) {
  const balance = Math.floor(Math.random() * 10000000);
  console.log(balance);
  const EnteredAmount = answers.amount;
  console.log("your  username is:", user.username);
  if (balance >= EnteredAmount) {
    const remianing = balance - EnteredAmount;
    console.log(chalk.yellow("Your remaining balance is", remianing));
  } else {
    console.log(chalk.red("Not enough Balance to withdraw and fastcash your payment"));
  }
}
