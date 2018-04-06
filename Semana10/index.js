//Caluladora
const express = require('express');
const app = express();

app.get ('/', (req, res) => res.send('CALCULADORA'));
app.listen(3000, () => console.log('Exampleee app listening on port 3000!'));

app.get('/suma', function (req, res) {
  res.send('Sumar')
})


//Tutorial
/*
const http = require('http');
//to load a file
const fs = require('fs');

const hostname = '127.0.0.1'
const port = 3000;

fs.readFile('index.html', (err, html) => {
  if (err) {
    throw err;
  }

  const server = http.createServer((req, res) => {
    //200 is the  code that basically says everything is ok, when you make a request
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write(html);
    res.end();
  });
  server.listen(port, hostname, () => {
    console.log('Sever started on port ' + port);

  });

});
*/


//SERVER example made in class
/*const http = require('http');
console.log(http);

function createServ (req, res) {
    console.log(req.url);
    console.log("hello request");
    res.end("hello");
  }
const server = http.createServer(createServ);


  server.listen(8000);
*/
/*
//1
var lista  = [70, 200, 80, 70, 180];

//2
console.log('lista', lista);
var filtrando = lista.filter(function(number){
return number > 60;
});

console.log('filtrando', filtrando);

var filtrandoEvery = lista.every(function(number){
    return number > 60;
    });

    console.log('filtrandoEvery', filtrandoEvery); */