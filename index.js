#! /usr/bin/env node 
import inquirer from "inquirer";
console.log("\n\tWelcome to CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    { name: "userGuessedNumber",
        type: "number",
        message: "Enter your Guess Number(number limit from 1 to 5):"
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("\nCongratulations ! You Guess a Correct Number.");
}
else {
    console.log("\nSorry, you guess a wrong number.");
}
