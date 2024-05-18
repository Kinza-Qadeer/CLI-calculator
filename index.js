import inquirer from "inquirer";
async function askQuestion() {
    await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "Please choose the operation you want to perform",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter number 1"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter number 2"
        }
    ])
        .then((answers) => {
        if (answers.operator == "Addition") {
            console.log(`${answers.num1} + ${answers.num2} = "${answers.num1 + answers.num2}`);
        }
        else if (answers.operator == "Subtraction") {
            console.log(`${answers.num1} - ${answers.num2} = "${answers.num1 - answers.num2}`);
        }
        else if (answers.operator == "Multiplication") {
            console.log(`${answers.num1} * ${answers.num2} = "${answers.num1 * answers.num2}`);
        }
        else if (answers.operator == "Division") {
            console.log(`${answers.num1} / ${answers.num2} = "${answers.num1 / answers.num2}`);
        }
    });
}
askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? (y/n)"
        });
    } while (again.restart == 'y' || again.restart == 'Yes');
}
startAgain();
