var listadeusuarios = {
    usuarios: [],

    addUsuario: function (imgtemp,nombretemp,rtemp,gtemp,gtemp) {
        this.usuarios.push({
            img : imgtemp,
            nombre :nombretemp,
            r : rtemp,
            g: gtemp,
            b: btemp,
        });
    }
}
//PARA MANEJAR LAS ACCIONES DESDE EL HTML
var handlers = {
    addUsuario: function () {
        listadeusuarios.addUsuario("http://peopledotcom.files.wordpress.com/2017/12/kardashian-christmas2.jpg?crop=104px%2C43px%2C1045px%2C1045px&resize=1000%2C1000","Juan","r","g","b");
        view.displayUsuarios();

    },
}

var view = {
    displayUsuarios: function() {
        var seccionUsuarios =  document.querySelector('.contenedor');
        seccionUsuarios.innerHTML = '';

        listadeusuarios.usuarios.forEach(function(usuarioIndent) {
            //crear el article del usuario
            var userArticle = document.createElement('article');
            userArticle.className = persona;

           
            //asigno nombre
            var nombreUser = document.createElement('p');
            nombreUser.textContent = usuarioIndent.nombre;
            userArticle.appendChild(nombreUser);

            seccionUsuarios.appendChild(userArticle);

        }, this)

    }
}