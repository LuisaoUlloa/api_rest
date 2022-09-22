require("dotenv").config();          //* para decirle a la aplicacion que utilice las variables de entorno
const express = require("express");
const cors    = require("cors");
const app     = express();


app.use(cors()); //* para evitar el error de origen cruzado, por el momento todos los clientes se pueden conectar

const port = process.env.PORT || 3001; //* en caso que llegue a fallar tenemos el puerto 3001

//* pasamos como primer argumento el puerto y luego una funcion
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});



