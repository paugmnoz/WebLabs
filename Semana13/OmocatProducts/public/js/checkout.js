console.log(arreglo);
var lista = document.querySelector('.lista');
arreglo.forEach(function(elemento){
    lista.innerHTML += '<li>'+ elemento + '</li>';
});
