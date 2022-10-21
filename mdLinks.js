import path from "path";
import fs from "fs";
import chalk from "chalk";
import fetch from "node-fetch";

//Comprobar si existe un archivo
const verificateFileExist = (file) => {
  if (fs.existsSync(file)) {
    return fs.existsSync(file);
  }
};

//Si la ruta no es absoluta convertir a absoluta
const convertToAbsolutePath = (file) => {
  if (path.isAbsolute(file) === false) {
    return path.resolve(file);
  } else {
    return file;
  }
};
//Ver si al archivo es de tipo Md
const searchMd = (file) => {
  if (path.extname(file) === ".md") {
    return true;
  } else {
    return false;
  }
};

//Comprobar si tiene links
const linkRead = (pathToRead) => {
  const file = fs.readFileSync(pathToRead, "utf-8");
  const newLinks = [];
  const regExpHttp =
    /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim;

  //Si el archivo contiene links meterlos en un arreglo
  if (file.match(regExpHttp) === null) {
    return false;
  } else if (file) {
    file.match(regExpHttp).forEach((links) => {
      newLinks.push(links);
    });
  }
  return newLinks;
};
//Valida que los Links esten funcionando
const validateLinks = (arrlinks) => {
  console.log({ arrlinks });  
  console.log(chalk.bgGreenBright("Estos son los estados de sus Links:"))

  setTimeout(() => {
  const arrayLink = arrlinks.forEach((link) => {
    fetch(link)
      .then((res) => {
        const statusText = res.status == 200 ? res.statusText : "FAIL";
     

        console.log({
          link: link,
          status: res.status,
          message: statusText,
         
        });
      })
      .catch((rej) => {
        console.log({
          link: link,
          status: rej.status,
          message: "Fail",
          });
           });
  });
},3000);
};


export {
  verificateFileExist,
  convertToAbsolutePath,
  searchMd,
  linkRead,
  validateLinks,
 
};
