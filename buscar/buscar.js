const csv = require("csvtojson");
const colors = require('colors');
const fs = require('fs')


async function getData(file) {
    try {
        const datos = await csv().fromFile(file);
        return datos
    } catch (error) {
        error = "no se ha encontrado el archivo"
        return error;
    }
}



async function getContry(data, cod, year) {
    try {
        for (var i = 0; i < data.length; i++) {
            let va = Object.values(data[i]);

            if (va[61] == cod) {

                var total = 59 - (2019 - year);
                if (va[total] == "") {
                    return ` pais: ${va[60]} \n año: ${year} \n valor: año sin valor \n${va[62]} `;
                }

                return ` pais: ${va[60]} \n año: ${year} \n valor: ${va[total]} \n${va[62]} `;

            }
        }
    } catch (error) {
        console.log("pais no encontrado");
    }
}


async function guardarDB(path, cod, year) {
    let info = await getData(path);
    let consu = await getContry(info, cod, year);
    console.log(colors.green(consu));
    let data = JSON.stringify(consu);
    fs.writeFile(`./resultados/${cod}.txt`, data, (err) => {
        if (err) { throw new Error('no se pudo guardar', err) } else { console.log(colors.blue("guardado corrctamente")); };
    });

}



async function consulta(path, cod, year) {
    console.log(colors.bgYellow("+**********************************+"));
    console.log(colors.blue("+***********Examen 1.**************+"));
    let info = await getData(path);
    let consu = await getContry(info, cod, year);
    console.log(colors.green(consu));
    console.log(colors.bgYellow("+**********************************+"));
}
module.exports = {
    consulta,
    guardarDB
}