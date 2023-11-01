import inquirer from "inquirer";
import chalk from "chalk";
// Define the player class
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
    fuelIncrease1() {
        let fuel = this.fuel + 25;
        this.fuel = fuel;
    }
    fuelIncrease2() {
        let fuel = this.fuel + 10;
        this.fuel = fuel;
    }
}
// Define the opponent class
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
// Function to play the game
async function playGame() {
    let player1 = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your name:",
        },
    ]);
    console.log(player1.name);
    let opponent1 = await inquirer.prompt([
        {
            type: "list",
            name: "select",
            message: "Select your opponent",
            choices: ["skeleton", "zombie", "assassin"],
        },
    ]);
    console.log(opponent1.select);
    let p1 = new Player(player1.name);
    let o1 = new Opponent(opponent1.select);
    do {
        if (opponent1.select == "skeleton" || opponent1.select == "zombie" || opponent1.select == "assassin") {
            let ask = await inquirer.prompt([
                {
                    type: "list",
                    name: "potion",
                    message: "Select your action",
                    choices: ["attack", "superpower", "bandages", "energy drink", "exit"],
                },
            ]);
            if (ask.potion == "superpower") {
                p1.fuelIncrease();
                console.log(`You have full power ${p1.fuel}`);
            }
            else if (ask.potion == "bandages") {
                p1.fuelIncrease1();
                console.log(chalk.bold.red.italic(`You have increased power to ${p1.fuel}`));
            }
            else if (ask.potion == "energy drink") {
                p1.fuelIncrease2();
                console.log(chalk.bold.red.italic(chalk.bold.italic.green(`You drank a health potion. Your power is ${p1.fuel}`)));
            }
            else if (ask.potion == "exit") {
                break; // Exit the game loop
            }
            else if (ask.potion == "attack") {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    p1.fuelDecrease();
                    console.log(`${chalk.bold.red(p1.name)} Power is ${p1.fuel}`);
                    console.log(`${chalk.bold.green(o1.name)} Power is ${o1.fuel}`);
                    if (p1.fuel === 0) {
                        console.log(chalk.bold.green.italic("You lose this game"));
                        break;
                    }
                }
                else if (num <= 0) {
                    o1.fuelDecrease();
                    console.log(`${chalk.bold.red(o1.name)} Power is ${o1.fuel}`);
                    console.log(`${chalk.bold.green(p1.name)} Power is ${p1.fuel}`);
                    if (o1.fuel === 0) {
                        console.log(chalk.bold.green.italic("Wow, you won this game"));
                        break;
                    }
                }
            }
        }
    } while (true);
    // Ask the user if they want to play again
    let playAgain = await inquirer.prompt([
        {
            type: "confirm",
            name: "restart",
            message: "Do you want to play again?",
        },
    ]);
    if (playAgain.restart) {
        playGame(); // Restart the game
    }
    else {
        console.log("Thank you for playing!");
        process.exit();
    }
}
playGame();
