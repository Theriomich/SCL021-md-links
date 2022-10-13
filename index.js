import welcome from "./welcome.js"
import inquirer from "inquirer"
import path from "path"
import fs from "fs"
import chalk from "chalk"

const yellow = chalk.bold.yellow
console.log(welcome)

setTimeout(() => {
    inquirer.prompt({

        name: "archivo",
        message: "Ingrese la ruta del archivo",
        default: "C:/ Users /  carpeta / doc.md"


    }).then(answers => {
        console.log("Answer: ", answers)
    }
    )

}, 3000)



export default answers

