import inquirer from "inquirer"
const answers:{
    Sentences:string
} = await inquirer.prompt([
    {
        name:"Sentences",
        type:"input",
        message:"Enter your sentence to count the word:"
    }
]);

const words = answers.Sentences.trim().split("")
console.log(words)


console.log(`your word sentence is ${words.length}`)