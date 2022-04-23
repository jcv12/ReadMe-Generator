const inquirer = require("inquirer");




const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "userName",
            message: "What is your Github Username?",
        }
    ])
}