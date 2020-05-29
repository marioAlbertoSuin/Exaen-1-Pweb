const csv = require("csvtojson");
const colors = require('colors');
const fs = require('fs')


async function getData(file) {
    try {
        const datos = await csv().fromFile(file);

        return datos;
    } catch (error) {
        error = "no se ha encontrado el archivo"
        return error;
    }
}



async function getContry(data, cod) {
    try {

    } catch (error) {

    }
}




async function consulta(path, cod, year) {
    let info = await getData(path);

}
module.exports = {
    consulta
}