const MongoClient = require('mongodb').MongoClient,
    express = require('express'),
    engines = require('consolidate'),
    fs = require('fs');

var app = express(),
    db;

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

//Conectarse a la base de datos
MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;

    db = client.db('Products');
    //iniciar servidor
    var server = app.listen(1889);
});

app.get('/', (req, res) => {
    /*    db.collection('camisas')
        .find()
        .toArray((err, result) => {
            res.render('index', {
                camisas: result
            });//fin res.render
        })*/
    var product = db.collection('camisas')
        .find();

    product.filter({artista: "crysalis"});

    product.toArray((err, result) => {
        res.render('index', {
            camisas: result
        }); //fin res.render
    })
}); //fin get