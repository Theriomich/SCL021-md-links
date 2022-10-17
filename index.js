import welcome from "./welcome.js"
import inquirer from "inquirer"
import path from "path"
import chalk from "chalk"
import { verificateFileExist, convertToAbsolutePath } from "./mdLinks.js"

const yellow = chalk.bold.yellow
console.log(welcome)

setTimeout(() => {
    inquirer.prompt({

        name: "archivo",
        message: "Ingrese la ruta del archivo",
        default: "C:/ Users /  carpeta / doc.md"


    }).then(answers => {
        //console.log({ answers })
        if (answers.archivo === path) {
            console.log("Answer:", verificateFileExist(answers.archivo))
        }
        //else if (answers === path.isAbsolute) { return console.log("Answer:", answers) }
        else { chalk.redBright("Debe ingresar una ruta valida") }
        //console.log("Answer: ", (answers));
    }
    )

}, 3000)








