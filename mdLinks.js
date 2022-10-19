import path from "path";
import fs from "fs";
import chalk from "chalk";
import { url } from "inspector";
import https from "https";
//import fs from "fs"

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

//Si es md comprobar si tiene links
const linkRead = (pathToRead) => {
  const file = fs.readFileSync(pathToRead, "utf-8");
  const newLinks = [];
  const regExpHttp =
    /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim;
  //Si el archivo contiene links meterlos en un arreglo
  const parseFile = path.parse(pathToRead);

  if (file.match(regExpHttp) === null) {
    return false;
  } else if (file) {
    file.match(regExpHttp).forEach((links) => {
      newLinks.push(links);
    });
  }
  return newLinks;
};

// function replaceURLs(message) {
//     if (!message) return;

//     var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
//     return message.replace(urlRegex, function (url) {
//         var hyperlink = url;
//         if (!hyperlink.match('^https?:\/\/')) {
//             hyperlink = 'http://' + hyperlink;
//         }
//         return '<a href="' + hyperlink + '" target="_blank" rel="noopener noreferrer">' + url + '</a>'
//     });
// }

function detectURLs(message) {
  let urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
  fs.readFileSync(message);
  return message.match(urlRegex);
}

//console.log(detectURLs(`Files/someLinks.md`));

// }
//console.log(print(urls))

// let resul =
//     let link = []
// while ((result = regExpHttp.exec(parseFile)) !== null) {
//     let obj{
//         href: result[0, 3],
//         text: result[0, 4],
//         file: pathToRead
//     }
//     link.push(obj)
// }
// return link

export { verificateFileExist, convertToAbsolutePath, searchMd, linkRead };
