

    var arreglo = JSON.parse(localStorage.getItem('arreglo'));
    if(arreglo == null) arreglo = [];
    //numero carrito
     actualizarCarrito = function () {
    document.querySelector('.carrito').innerHTML = arreglo.length;

    }
    actualizarCarrito();
    document.querySelectorAll(".add").forEach(function(button){
        console.log(button);
        button.addEventListener('click', function(){
            var id = button.parentElement.getAttribute('data-id')
           //no agregar si ya está en la lista de compra
            if(arreglo.indexOf(id) >=0){
                console.log('paila');
                return;
            }
            //agregar al arreglo
            arreglo.push(id);
actualizarCarrito();
            localStorage.setItem('arreglo', JSON.stringify(arreglo));
        });
    });