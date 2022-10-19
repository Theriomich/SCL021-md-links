import welcome from "./welcome.js";
import inquirer from "inquirer";
import path from "path";
import chalk from "chalk";
import {
  verificateFileExist,
  convertToAbsolutePath,
  searchMd,
  linkRead,
} from "./mdLinks.js";

console.log(welcome);

setTimeout(() => {
  inquirer
    .prompt({
      name: "archivo",
      message: "Ingrese la ruta del archivo",
      default: "C:/ Users /  carpeta / doc.md",
    })
    .then((answers) => {
      if (verificateFileExist(answers.archivo) === true) {
        console.log("Answer:", convertToAbsolutePath(answers.archivo));
        const pathAbsolute = convertToAbsolutePath(answers.archivo);
        console.log(linkRead(pathAbsolute));
      } else {
        console.log(chalk.redBright("Debe ingresar una ruta valida"));
      }

      if (
        searchMd(answers.archivo) === false &&
        verificateFileExist(answers.archivo) === true
      ) {
        console.log(chalk.yellowBright("Archivos MD no encontrados"));
      }
    });
}, 3000);
