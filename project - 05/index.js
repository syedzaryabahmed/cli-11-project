#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(chalk.yellow(`Your  word of your paragraph counted ${words.length}`));
