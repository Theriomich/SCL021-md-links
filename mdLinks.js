import path from "path"
import fs from "fs"
import chalk from "chalk"
//import fs from "fs"

//Comprobar si existe un archivo
const verificateFileExist = (file) => {
    if (fs.existsSync(file)) { return fs.existsSync(file) }


}
console.log(verificateFileExist("Files/info.txt"))



//Si la ruta no es absoluta convertir a absoluta
const convertToAbsolutePath = (file) => {
    if (path.isAbsolute(file) === false) { return path.resolve(file) }
    else { return file }
}
//Ver si al archivo es de tipo Md
const searchMd = (file) => {
    if (path.extname(file) === ".md") { return true }
    else { return false }
}

//Si es md comprobar si tiene links
const fileRead = (pathToRead) => {
    const file = fs.readFileSync(pathToRead, "uft8")
    const regExpHttp = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
    //Si el archivo contiene links convertir sus propiedades en un objeto
    const parseFile = path.parse(file)
    console.log(file.match(regExpHttp))

    if (file.match(regExpHttp)) { return parseFile }



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

}


export { verificateFileExist, convertToAbsolutePath }

//console.log(parseFile("Files/lala.md"))





//console.log(convertToAbsolutePath("Files/someLinks.md"))

