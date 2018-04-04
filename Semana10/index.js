
const http = require('http');
console.log(http);

function createServ (req, res) {
    console.log(req.url);
    console.log("hello request");
    res.end("hello");
  }
const server = http.createServer(createServ);


  server.listen(8000);

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