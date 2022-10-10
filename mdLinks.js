
// 
const os = require("os")

console.log(os.platform)
console.log(os.release)
console.log(os.totalmem)
// console.log(path)

// console.log(edad)
// console.log(gatito)
console.table({
    os: os.platform(),
    version: os.release(),
    gatitoMem: os.totalmem(),
}) 