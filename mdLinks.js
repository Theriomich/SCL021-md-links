import path from "path"
import fs from "fs"
import chalk from "chalk"
//import answers from "."

//Si la ruta no es absoluta convertir a absoluta
const convertToAbsolutePath = (file) => {
    if (path.isAbsolute(file) === false) { return path.resolve(file) }
}
console.log(convertToAbsolutePath)