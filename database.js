var mysql = require('mysql');

var connetion = mysql.createConnection({
    host:'localhost',
    database:'psico',
    user:'root',
    password:'root123'
})

connetion.connect((error)=>{
    if(error){
        console.log('el error de conexion es :', error)
        return
    }
    console.log('conectado beibe')
})



module.exports = connetion;