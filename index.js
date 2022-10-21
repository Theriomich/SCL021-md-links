import welcome from "./welcome.js";
import inquirer from "inquirer";
import chalk from "chalk";
import {
  verificateFileExist,
  convertToAbsolutePath,
  searchMd,
  linkRead,
  validateLinks,
} from "./mdLinks.js";

console.log(welcome);

setTimeout(() => {
  inquirer
    .prompt({
      name: "archivo",
      message: "Ingrese la ruta del archivo",
      default: "C:/ Users /  carpeta / doc.md",
    })
    //Si hay archivo y es MD
    .then((answers) => {
      if (verificateFileExist(answers.archivo) === true && searchMd(answers.archivo) === true ) {
        console.log("Answer:", convertToAbsolutePath(answers.archivo));
        const pathAbsolute = convertToAbsolutePath(answers.archivo);
        console.log(
          chalk.cyanBright("Se encontraron los siguientes Links en su archivo:")
        );
        
        const read = linkRead(pathAbsolute);

        setTimeout(() => {       

         validateLinks(read)},3000);
        } 
//Si hay un archivo y no es MD
       else if (
          searchMd(answers.archivo) === false &&
          verificateFileExist(answers.archivo) === true
        ) {
          console.log("Answer:", convertToAbsolutePath(answers.archivo));
          console.log(chalk.yellowBright("Archivos MD no encontrados"));
        }
        //Si no hay archivo
       else {
        console.log(chalk.redBright("Debe ingresar una ruta valida"));
      }
 
    });
}, 3000);
