#!/usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Enter your User ID"
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter your PIN"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your account type"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "withdrawal"],
        message: "Select your transaction method",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 3000, 4000],
        message: "Select your amount",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(answers) {
            return answers.transactionType == "withdrawal";
        }
    },
]);
if (answers.userId && answers.userPin) {
    const accountBalance = Math.floor(Math.random() * 100000);
    console.log(accountBalance);
    const enteredAmount = answers.amount;
    if (accountBalance >= enteredAmount) {
        const remainingBalance = accountBalance - enteredAmount;
        console.log("Your remaining balance is:", remainingBalance);
    }
    else {
        console.log("Insuficient Balance");
    }
}
