const {readFileSync,writeFileSync} = require("fs");

const leerArchivo = (path) => {
    const json = readFileSync(path,'utf-8')
    return JSON.parse(json)
}

const escribirArchivo = (arr,path) => {
    const string = JSON.stringify(arr)
    writeFileSync(path,string,'utf-8')
}

module.exports = {leerArchivo,escribirArchivo}