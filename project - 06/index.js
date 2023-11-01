#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        type: "string",
        name: "studentname",
        message: chalk.red("Kindly Entre Your  Name"),
    },
    {
        type: "list",
        name: "course",
        choices: ["Graphic Designing", "Web Development", "AI And Metaverse"],
        message: "select course .",
    },
    {
        type: "list",
        name: "student",
        choices: ["New student", "Old student"],
        message: "select ",
    },
]);
// const {numberOne,numbertwo,operator}=answer;
const { studentname, course, student } = answer;
console.log("");
// ID
function generateUnique5DigitID() {
    const randomNumber = Math.floor(Math.random() * 90000) + 10000;
    const randomNumberString = randomNumber.toString();
    return randomNumberString.padStart(5, "0");
}
const uniqueID = generateUnique5DigitID();
console.log(chalk.yellow("Your id is", uniqueID, ":"));
console.log("");
// NAME
console.log(chalk.yellow("Your Name is ", studentname, "."));
console.log("");
// NEW STUDENT OLD STUDENT
console.log(chalk.yellow("You Are", student, "."));
console.log("");
// course
console.log(chalk.yellow("You Choose ", course, "."));
console.log("");
// balance
let balance = 10000;
function viewBalance() {
    if (studentname) {
        return balance;
    }
    else {
        console.log("Student not found.");
        return 0;
    }
}
console.log(chalk.yellow("Your Balance Is ", viewBalance()));
console.log("");
// TUTION FEE
let balance1 = 10000;
let amount = 1500;
function payTuition() {
    if (studentname) {
        return (balance1 = amount);
    }
    else {
        console.log("Student not found.");
    }
}
console.log(chalk.yellow("You Pay Tution Fee ", payTuition()));
console.log("");
// REMAINING BALANCE
let balance2 = 10000;
function remainingbalance() {
    if (studentname) {
        return balance2 -= amount;
    }
    else {
        console.log("Student not found.");
    }
}
console.log(chalk.yellow("Your Remaining Balance is", remainingbalance()));
console.log("");
