#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let Convertion = {
    "PKR": {
        "USD": 0.0033,
        "GBP": 0.0026,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 387.21,
        "GBP": 1
    },
    "USD": {
        "PKR": 307.63,
        "GBP": 1.26,
        "USD": 1
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "zaryab",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency: "
    },
    {
        type: "list",
        name: "raza",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your convertion currency: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your convertion amount: "
    }
]);
const { zaryab, raza, amount } = answer;
if (zaryab && raza && amount) {
    let result = Convertion[zaryab][raza] * amount;
    console.log(chalk.yellow(`Your convertion from ${zaryab} to ${raza} is ${result}`));
}
else {
    console.log("Invalid inputs");
}
