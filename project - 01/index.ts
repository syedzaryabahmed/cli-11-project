#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation"





type ansType = {
  userGuess: number;
};

const systemGeneratedNo = Math.floor(Math.random() * 10);

const answers: ansType = await inquirer.prompt([
  {
    type: "number",
    name: "userGuess",
    message: "Write your number between:1 to 10: ",
  },
]);

const { userGuess } = answers;

console.log( "your guess:",userGuess, " computer guess:",  systemGeneratedNo, );

if (userGuess === systemGeneratedNo) {
  console.log("Yes! Your answer is correct \n You Win!");
} else {
  console.log("Please try again Better luck next time!");
}

