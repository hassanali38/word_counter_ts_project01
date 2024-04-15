#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

while (true)
{
    const str = await inquirer.prompt([{
        type : "input",
        name : "msg",
        message : "Enter a message: "
    }])
    
    //For counting characters of an input string
    let counter1 = 0;
    for (let i = 0; i < (str.msg).length; i++)
    {
        if (str.msg[i] != " ")
        {
            counter1++;
        }
    }
    
    console.log("The total number of characters in the string are: " + counter1);
    
    //For counting words of an input string
    let counter2 = 1;
    for (let j = 0; j < (str.msg).length; j++)
    {
        if (str.msg[j] == " ")
        {
            counter2++;
        }
    }
    
    console.log("The total number of words in the string are: " + counter2);

    let again_check = await inquirer.prompt([{
        type : "list",
        name : "choice",
        message : "Do you want to enter another string?",
        choices : ["Yes", "No"]
    }])

    if (again_check.choice == "No")
    {
        console.log(chalk.green(`Thank you for using word counter!😍`));
        break;
    }

}
