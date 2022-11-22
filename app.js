//vincular clases o archivos

const Server = require('./models/server')

//permite emplear el .env
require ('dotenv').config();//cargar toda la importación

//instanciar un objeto de la clase server
const server = new Server();

//escuchar el puerto
server.listen()

//{
 //   "nombreEncuesta": "ronald",
  //  "fecha": "2022-12-04",
  //  "documentoEncuestado": "02947382",
  //  "edad": "12",
  //  "genero": "hombre",
  //  "empleado": "si"
 // }