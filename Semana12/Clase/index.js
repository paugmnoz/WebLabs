//guardar librería en una constante
const express = require('express');
//crear app
const app = express();
//configrar una ruta
app.get('/', function(req, res){
    res.send('holap');
});

app.listen(7070, function(){
    console.log('done in port 7070');
});
