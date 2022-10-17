import welcome from "./welcome.js"
import inquirer from "inquirer"
import path from "path"
import fs from "fs"
import chalk from "chalk"
import { convertToAbsolutePath } from "./mdLinks.js"

const yellow = chalk.bold.yellow
console.log(welcome)

setTimeout(() => {
    inquirer.prompt({

        name: "archivo",
        message: "Ingrese la ruta del archivo",
        default: "C:/ Users /  carpeta / doc.md"


    }).then(answers => {
        if (answers === path) {
            return console.log("Answer:", convertToAbsolutePath(answers))
        }
        //else if (answers === path.isAbsolute) { return console.log("Answer:", answers) }
        else { return chalk.bgRed("Debe ingresar una ruta valida") }
        //console.log("Answer: ", (answers));
    }
    )

}, 3000)





