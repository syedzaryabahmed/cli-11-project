#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation"

console.log(`
_____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________| `);


const sleep = (ms = 2000) => new Promise((r) => setTimeout(r,ms)); 
async  function welcome(){
   const rainbowTitle = chalkanimation.rainbow(
       'Made by SYED ZARYAB AHMED  \n',    
 
  );
   await sleep();
rainbowTitle.stop()
   }await welcome();
const answer :{
    numberOne:number,
    numbertwo:number,
   operator:string,
} = await inquirer.prompt([
    {
        type:"number",
        name:"numberOne",
        message:(chalk.red("Kindly Entre Your First Number ="))
    },
    {
        type:"number",
        name:"numbertwo",
        message:(chalk.red("Kindly Entre Your Second Number ="))
    },
    {
        type:"list",
        name:"operator",
        choices:["/","-","+", "*"],
        message:("select opertor")
    },
   
]);

const {numberOne,numbertwo,operator}=answer;
    if(numberOne && numbertwo && operator){
     let result;
     if(operator ==="+"){
        result=numberOne+numbertwo
     }
     else if(operator==="-"){
        result=numberOne-numbertwo
     }
     if(operator=== "/"){
        result=numberOne/numbertwo
     }
     if(operator=== "*"){
        result=numberOne*numbertwo
     }
   
console.log (chalk.yellow ("Your result is =",result));
   
 
        }    else{
        console.log (chalk.redBright ("Kindly enter correct number"));
    }

