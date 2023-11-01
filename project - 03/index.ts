#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


let todos: string[] = [];
let loop = true;

while(loop){
    const answers : {
        TODO: string,
        addmore: boolean
    }= await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your todo? "
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more todo? ",
            default: false
        }
    ])
    const {TODO, addmore} = answers;
    console.log(answers)
     loop = addmore
    if(TODO) {
        todos.push(TODO)
    } else {
        console.log("Kindly add valid input")
    }
}

if(todos.length > 0){
    console.log(chalk.yellow("Your Todo List:"))
    todos.forEach(todo => {
        console.log(todo)
    });
} else {
    console.log("No todos found")
}