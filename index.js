const { json } = require("express");
var express = require("express");
var mysql = require("mysql");
var app = express();

app.set('view engine','ejs')

app.use(express.urlencoded({extended:false}));
app.set('views engine','ejs');
app.use(express.static(__dirname +'/public'));

app.use(express(json))

app.use('/', require('./router'));

app.listen(3000, ()=>{
    console.log('siiu')
}
)