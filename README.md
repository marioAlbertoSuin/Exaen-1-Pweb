# Aplicación en NodeJS que permita leer los datos de las Suscripciones a telefonía celular móvil

_Crear una aplicación en NodeJS que permita leer los datos de las suscripciones a telefonía celular móvil, publicadas por el Banco
Mundial y publicar las estadísticas de un determinado país en un año específico._

## Comenzando 🚀

_Estas instrucciones te permitirán ejecutar de manera optima la aplicacion, sigue los pasos, para cualquier duda no dudes en contactarme kchangoluisa@hotmail.com._

### Pre-requisitos 📋


```
_Librerias que necesitas instalar._

```
yargs
colors
csvtojson
```

```

## Ejecutando las pruebas ⚙️

La aplicacion cuenta con 2 comandos:
* Publicar
* Guardar

**Publicar**

La estructura para publicar en la aplicacion es la sigueinte:
node app.js publicar **-f** "nombre_archivo.csv" **-c** "[codigo_del_pais ](https://laendercode.net/es/3-letter-list.html)" **-y** Año

```
Ejemplo:
node app.js publicar -f "./datos.csv" -c "ECU" -y 2016  
```
  ![Screenshot](im_readme/consola.gif)
  
Para visualizar los resultados en la web siga los siguientes pasos:
```
Abra su navegador digite en la seccion de url: localhost:3000
de clic en visualizar
```
 ![Screenshot](im_readme/web.gif)


**Guardar**

La estructura para guardar en la aplicacion es la siguiente:
node app.js guardar **-f** "nombre_archivo.csv" **-c** "[codigo_del_pais ](https://laendercode.net/es/3-letter-list.html)" **-y** Año 




## Construido con 🛠️

* [Visual Studio Code](https://code.visualstudio.com/) - Editor de código fuente.
* [Node js](https://nodejs.org/es/) - Entorno de ejecución para JavaScript.


## Licencia 📄

Este proyecto está bajo la Licencia GNU General Public License v3.0 - mira el archivo [LICENSE.md](LICENSE) para detalles
