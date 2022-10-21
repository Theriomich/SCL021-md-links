import path from "path";
import fs from "fs";
import chalk from "chalk";
import { url } from "inspector";
import https from "https";
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

// const countLinks = (links) => {
//   let count = 0;
//   links.forEach((link, index) => {
//     if (links.indexOf(link) === index) {
//       count++;
//     }
//   });
//   return count;
// };

const validateLinks = (arrlinks) => {
  console.log({ arrlinks });
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
};

//(links) => {
//   https.get(res.forEach((links) => {
//    if (res.statusCode === 200);
//  { return "si"}
// else
//   {
//    return "No"
//   };
// }
// };
//   let request = FileReader.readAsDataURL();
//   //new https();
//   source.forEach((url) => {
//     if (request.statusCode(url) === 200) {
//       return true;
//     } else {
//       return false;
//     }
//   });

export {
  verificateFileExist,
  convertToAbsolutePath,
  searchMd,
  linkRead,
  validateLinks,
  // countLinks,
};
