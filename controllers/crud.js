const conexion = require('../database') 

exports.saveLogin = (req,res)=>{
    const user = req.body.user;
    const pin = req.body.pin;
    console.log(111, pin, user)

    if(user === 'angel'){
        if(pin === 'angel122'){
            res.redirect('/pacientes')
        }else{
            res.redirect('/login')
        }
    }
}

exports.save = (req,res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const edad = req.body.edad;
    const sexo = req.body.sexo;
    const razon = req.body.razon;
    const psicioterapeuta = req.body.psicioterapeuta;

    console.log(111, name, edad, sexo, razon, id)

    conexion.query('INSERT INTO pasientes SET ?', {name:name, edad:edad, sexo:sexo, razon:razon, psicioterapeuta:psicioterapeuta}, (err, results)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect('/pacientes')
        }
    })
}

exports.saveFecha = (req,res)=>{
    const cita = req.body.cita
    const name= req.body.name;
    console.log(111,cita)

    conexion.query('INSERT INTO pasientes SET ?', {cita:cita, name:name}, (err, results)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect('/calendario')
        }
    })
}

exports.saveAviso = (req,res)=>{
    const avisos = req.body.avisos;
    console.log(111,avisos)

    conexion.query('INSERT INTO aviso SET ?', {avisos:avisos}, (err, results)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect('/avisos')
        }
    })
}
