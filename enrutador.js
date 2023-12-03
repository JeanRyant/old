// Obtener todos los elementos de enlace
var links = document.querySelectorAll('nav a');

// Agregar un evento de clic a cada enlace
links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evitar que el enlace redireccione

        // Obtener el valor del atributo data-page
        var page = link.getAttribute('data-page');

        // Cambiar la URL en la barra de direcciones sin recargar la página
        history.pushState({}, page, link.getAttribute('href'));

        // Puedes hacer lo que quieras con el valor de 'page'
        // En este ejemplo, simplemente lo mostramos en la consola
        console.log('Clic en enlace:', page);
    });
});
