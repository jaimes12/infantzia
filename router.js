const express = require ('express');
const router = express.Router();
const connection = require('./database');

router.get('/pacientes',(req,res)=>{
    
    connection.query('SELECT * FROM pasientes',(err,results)=>{
        if(err){
          throw err;
        }else{
            res.render('index.ejs', {results:results});
       }
 })
})

const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/saveFecha', crud.saveFecha);
router.post('/saveAviso', crud.saveAviso);
router.post('/saveLogin',crud.saveLogin)

router.get('/login', (req,res)=>{
    res.render('login')
})

router.get('/calendario', (req,res)=>{
    connection.query('SELECT * FROM pasientes',(err,results)=>{
        if(err){
          throw err;
        }else{
            res.render('calendario.ejs', {results:results});
       }
 })
})

router.get('/docs', (req,res)=>{
    connection.query('SELECT * FROM pasientes',(err,results)=>{
        if(err){
          throw err;
        }else{
            res.render('docs.ejs', {results:results});
       }
 })
})

router.get('/inicio', (req,res)=>{
    res.render('inicio')
})
router.get('/avisos', (req,res)=>{
    connection.query('SELECT * FROM aviso',(err,results)=>{
        if(err){
          throw err;
        }else{
            res.render('avisos.ejs', {results:results});
       }
 })
})

//RUTA PARA EDITAR
router.get('/delete/:id',(req,res)=>{
    const id = req.params.id
    connection.query('DELETE  FROM pasientes WHERE id = ?',[id],(err, results )=>{
        if(err){
            throw err;
          }else{
              res.redirect('/pacientes');
         } 
    })
})
router.get('/delete2/:id',(req,res)=>{
    const id = req.params.id
    connection.query('DELETE FROM aviso WHERE id = ?',[id],(err, results )=>{
        if(err){
            throw err;
          }else{
              res.redirect('/avisos');
         } 
    })
})
router.get('/delete3/:id',(req,res)=>{
    const id = req.params.id
    connection.query('DELETE  FROM pasientes WHERE id = ?',[id],(err, results )=>{
        if(err){
            throw err;
          }else{
              res.redirect('/calendario');
         } 
    })
})






module.exports = router;