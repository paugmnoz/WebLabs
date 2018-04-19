//Caluladora
const express = require('express');
const app = express();

app.get ('/', (req, res) => {
  res.send(getHtml('CALCULADORA'));
});


//---------------------SUMA
app.get('/suma', function (req, res) {
  var {a, b} = req.query;

 if( Object.keys(req.query).length === 0){
  console.log("no hay nada");
  res.send(getHtml('Suma', 'Escribe los parametros'));
 } if(!a || !b)
  return res.send(getHtml('suma', 'faltan argumentos', true));
  //    var suma = a +b;
      console.log(a+b);
    console.log(req.query);
  res.send(getHtml('suma', `resultado: ${parseFloat(a) + parseFloat(b)}`));


});

app.get('*', (req, res) => {
  res.send(getHtml('calculadora', 'ruta no existente'));
});

app.listen(3000, () => console.log('Exampleee app listening on port 3000!'));

var getHtml = function (titulo, texto, error) {
  return `
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      html, body, div { box-sizing: border-box; }
      .wrapper {
        font-family: Arial, sans-serif;
        width: 300;
        margin: 1rem auto;
        background: lightgray;
        border: 1px solid ${error ? 'red' : 'gray'};
        padding: 1.5rem 2rem;
      }
      h1 { border-bottom: 1px solid gray; }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <h1>${titulo}</h1>
      <p>${texto || ''}</p>
    </div>
  </body>
  </html>
  `;
}
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