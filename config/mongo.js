const mongoose = require("mongoose");
const dbConnect = () => {
   //const DB_URI = process.env.DB_URI;
   const DB_URI = 'mongodb://localhost:27017/db_usuarios';

   mongoose.connect(DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
   },(err,res) => {
     if(!err){
        //* Si no hay error
        console.log("Conexion Correcta");
     }
     else
    {
        console.log("Error en la conexion");
    }

   });
};

//* useNewUrlParser: true, si no se especifica mongoose utilizará un metodo obsoleto, para intentar parsear la uri de conexion
//* useUnifiedTopology: true, para que intente una conexion cada milisegundo

module.exports = dbConnect;