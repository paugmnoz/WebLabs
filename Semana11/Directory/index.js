const express = require('express'),
    consolidate = require('consolidate'),
    fs = require('fs'),
    hbs = require('handlebars');

var app = express();

//Configure the render engine (express + consolidate -> handlebars)
app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

var name, phone, genre;

app.get('/', (req, res) => {
    //Read the directory folder
    var directoryFolder = fs.readdirSync('../Directory/people');
    console.log(directoryFolder);
    directoryFolder.shift();
    res.render('index', {
        directoryFolder: directoryFolder
    });
});

app.get('/user/:id', function(req, res) {
    res.render('contact', {
        user: req.params.id
    });
});

app.listen(8080, () => console.log('Example app listening on port 8080!'));