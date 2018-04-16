//guardar librería en una constante
const express = require('express'),
      consolidate = require('consolidate'),
      hbs =  require('handlebars');

//crear app
var app = express();
//consolidate hace conexion con express y hbs
app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');

//definir template, y carpeta donde estara el template
app.set('views', './views');

//configrar una ruta
app.get('/', function(req, res){

    res.render('index', {
        titulo: 'Hola'
    });
});

app.listen(7070, function(){
    console.log('done in port 7070');
});
