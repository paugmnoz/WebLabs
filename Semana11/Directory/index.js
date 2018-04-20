const express = require('express'),
    consolidate = require('consolidate'),
    fs = require('fs'),
    hbs = require('handlebars');

var app = express();

//DOM
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

//const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

//Configure the render engine (express + consolidate -> handlebars)
app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

var  age, phone, gender;

app.get('/', (req, res) => {
    //Read the directory folder
    var directoryFolder = fs.readdirSync('people');
    console.log(directoryFolder);
    directoryFolder.shift();
    res.render('index', {
        directoryFolder: directoryFolder
    });
    
   /* document.addEventListener("DOMContentLoaded", function(event) {
        var btn =$('#addBtn').on('click', '#addBtn', function () { alert('clicked'); });
        console.log(btn);
      
    });*/
});

var handlers = {
    addUser: function () {
        console.log("adsadsfadsfad");

    },
}

app.get('/user/:id', function(req, res) {

    var dataFile = fs.readFileSync('../Directory/people/' + req.params.id);
    var dataText = String(dataFile);
    var data =  dataText.split('\n');
    age = data[0];
    gender = data[1];
    console.log(age );
    res.render('contact', {
        user: req.params.id,
        age: age,
        gender: gender
    });
});

app.listen(8080, () => console.log('Example app listening on port 8080!'));