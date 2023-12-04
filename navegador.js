document.addEventListener('DOMContentLoaded', function() {
    var navInicio = document.querySelectorAll('.nav-inicio');
    var content = document.getElementById('contenido');

    navInicio.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var page = this.getAttribute('data-page');
            content.innerHTML = '';
            loadPage(page);
        });
    });

    function loadPage(page) {
        content.innerHTML = `<!-- Banner -->
        <section class="Banner">
          <a href="#">
            <img src="./Imagenes de Pixabay/music-stand-4665181_1280.jpg" alt="Artículo destacado">
          </a>
        </section>
        <!-- Artículos Reveladores -->
        <section class="articulos">
          <h2>Artículos Reveladores</h2>
          <br>
          <div class="ListaDeArticulos">
            <!-- Artículo 1 -->
            <article class="articulo1">
              <a href="#">
                <h4><strong>León Tolstói</strong></h4>
                <img src="./Imagenes de Pixabay/moscow-1937274_640.jpg" alt="Título del artículo 1">
                <br>
                <p><strong>León Tolstói: Un Legado Literario Intemporal</strong> 
                  Adéntrate en la vida y obra de uno de los más grandes escritores de todos los tiempos, León Tolstói. Este artículo revela la fascinante historia detrás de este icónico autor ruso y su influencia en la literatura mundial. Desde su magistral novela "Guerra y Paz" hasta sus profundas reflexiones sobre la vida y la moral, descubre cómo Tolstói dejó una huella imborrable en la literatura y sigue inspirando a generaciones de lectores.</p>
              </a>
            </article>
            <!-- Artículo 2 -->
            <article class="articulo2">
              <a href="#">
                <h4><strong>¿Cómo escribir un artículo?</strong></h4>
                <img src="./Imagenes de Pixabay/black-4567519_640.jpg" alt="Título del artículo 2">
                <br>
                <p><strong>El Arte de Escribir: Descubre los Secretos para Componer un Artículo Destacado</strong> 
                  ¿Te has preguntado alguna vez cómo los escritores lograron cautivar a sus lectores con cada palabra? Este artículo te lleva de la mano en un emocionante viaje a través del arte de escribir un artículo efectivo. Aprende valiosas técnicas, consejos y trucos que te ayudarán a estructurar tus ideas de manera clara y persuasiva. Desde el poder de los titulares impactantes hasta la importancia de mantener una narrativa envolvente, descubre cómo convertirte en un maestro de la escritura persuasiva.</p>
              </a>
            </article>
            <!-- Artículo 3 -->
            <article class="articulo3">
              <a href="#">
                <h4><strong>Nuestro libro, Ciberverso: El Laberinto Infinito</strong></h4>
                <img src="./Imagenes de Pixabay/hand-316639_640.jpg" alt="Título del artículo 3">
                <br>
                <p><strong>"Ciberverso: El Laberinto Infinito"</strong> 
                  ¡Sumérgete en una aventura sin fin en el vasto ciberespacio! "Ciberverso: El Laberinto Infinito" es una historia única y en constante evolución, donde cada palabra escrita está en manos de todos aquellos que se aventuran en esta enigmática narrativa. Explora mundos digitales infinitos y desafía la imaginación en esta historia colaborativa que nunca se detiene.</p>
              </a>
            </article>
            <!-- Artículo 4 -->
            <article class="articulo4">
              <a href="#">
                <h4><strong>John Katzenbach</strong></h4>
                <img src="./Imagenes de Pixabay/skull-7505910_640.png" alt="Título del artículo 4">
                <br>
                <p><strong>John Katzenbach: Explorando la Mente del Suspenso</strong> 
                  Sumérgete en el apasionante mundo de la literatura de suspenso con John Katzenbach, un maestro contemporáneo del género. En esta presentación, te adentrarás en la mente creativa detrás de emocionantes thrillers, intrigantes misterios y personajes inolvidables. Descubre cómo Katzenbach ha cautivado a lectores de todo el mundo con su narrativa magistral y giros sorprendentes. Prepárate para una experiencia literaria emocionante mientras exploramos el legado de este talentoso autor y su impacto en el género del suspenso.</p>
              </a>
            </article>
            <!-- Artículo 5 -->
            <article class="articulo5">
              <a href="#">
                <h4><strong>Frankenstein de Mary W. Shelley</strong></h4>
                <img src="./Imagenes de Pixabay/ai-generated-8058323_640.jpg" alt="Título del artículo 5">
                <br>
                <p><strong>Frankenstein de Mary W. Shelley: Un Clásico Inmortal</strong> 
                  ¡Sumérgete en una aventura sin fin en el vasto ciberespacio! "Ciberverso: El Laberinto Infinito" es una historia única y en constante evolución, donde cada palabra escrita está en manos de todos aquellos que se aventuran en esta enigmática narrativa. Explora mundos digitales infinitos y desafía la imaginación en esta historia colaborativa que nunca se detiene.</p>
              </a>
            </article>
            <!-- Artículo 6 -->
            <article class="articulo6">
              <a href="#">
                <h4><strong>Comunidad de Old Wisdom</strong></h4>
                <img src="./Imagenes de Pixabay/ekg-2069872_640.png" alt="Título del artículo 6">
                <br>
                <p><strong>Comunidad de Old Wisdom: Conectando Amantes de la Literatura</strong> 
                  ¡Sumérgete en una aventura sin fin en el vasto ciberespacio! "Ciberverso: El Laberinto Infinito" es una historia única y en constante evolución, donde cada palabra escrita está en manos de todos aquellos que se aventuran en esta enigmática narrativa. Explora mundos digitales infinitos y desafía la imaginación en esta historia colaborativa que nunca se detiene.</p>
              </a>
            </article>
          </div>
        </section>`;
    }
});

//Codigo para la Vida de Autores

document.addEventListener('DOMContentLoaded', function() {
  var navVida = document.querySelectorAll('.nav-vida');
  var content = document.getElementById('contenido');

  navVida.forEach(function(link) {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          var page = this.getAttribute('data-page');
          content.innerHTML = '';
          loadPage(page);
      });
  });

    function loadPage(page) {
      import('./vida_de_autores.js')
      .then((module) => {
          const vidas = module.vidas;
          mostrarTitulos(vidas);
      })
      .catch((error) => {
          console.error('Error al importar el módulo:', error);
      });
  }

    function mostrarTitulos(vidas) {
        const contenidoDiv = document.getElementById('contenido');
        contenidoDiv.innerHTML = '';

        // Supongamos que el dominio base es "https://tudominio.com"
        const dominioBaseVida = "/vida_de_autores";

        // Crear una lista desordenada (ul)
        const listaVida = document.createElement('ul');

        for (let vida in vidas) {
            // Crear un elemento de lista (li)
            const listItemVida = document.createElement('li');

            // Crear el enlace (a)
            const a = document.createElement('a');
            a.textContent = vidas[vida].titulo;

            // Agregar el dominio base y la propiedad 'directorio' como href
            a.href = dominioBaseVida + vidas[vida].directorio;

            // Agregar el enlace al elemento de lista
            listItemVida.appendChild(a);

            // Agregar el elemento de lista a la lista desordenada
            listaVida.appendChild(listItemVida);
        }

        // Agregar la lista desordenada al contenidoDiv
        contenidoDiv.appendChild(listaVida);
    }

});


//Codigo para las Reseñas de Libros

document.addEventListener('DOMContentLoaded', function() {
  var navReseñas = document.querySelectorAll('.nav-reseñas');
  var content = document.getElementById('contenido');

  navReseñas.forEach(function(link) {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          var page = this.getAttribute('data-page');
          content.innerHTML = '';
          loadPage(page);
      });
  });

  function loadPage(page) {
    import('./resenas_de_libros.js')
    .then((module) => {
        const reseña = module.reseña;
        mostrarTitulos(reseña);
    })
    .catch((error) => {
        console.error('Error al importar el módulo:', error);
    });
}

  function mostrarTitulos(reseñas) {
      const contenidoDiv = document.getElementById('contenido');
      contenidoDiv.innerHTML = '';

      // Supongamos que el dominio base es "https://tudominio.com"
      const dominioBaseReseña = "/resenas_de_libros";

      // Crear una lista desordenada (ul)
      const listaReseña = document.createElement('ul');

      for (let reseña in reseñas) {
          // Crear un elemento de lista (li)
          const listItemReseña = document.createElement('li');

          // Crear el enlace (a)
          const a = document.createElement('a');
          a.textContent = reseñas[reseña].titulo;

          // Agregar el dominio base y la propiedad 'directorio' como href
          a.href = dominioBaseReseña + reseñas[reseña].directorio;

          // Agregar el enlace al elemento de lista
          listItemReseña.appendChild(a);

          // Agregar el elemento de lista a la lista desordenada
          listaReseña.appendChild(listItemReseña);
      }

      // Agregar la lista desordenada al contenidoDiv
      contenidoDiv.appendChild(listaReseña);
  }
});


//Codigo de Escritura Creativa

document.addEventListener('DOMContentLoaded', function() {
  var navEscritura = document.querySelectorAll('.nav-escritura');
  var content = document.getElementById('contenido');

  navEscritura.forEach(function(link) {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          var page = this.getAttribute('data-page');
          content.innerHTML = '';
          loadPage(page);
      });
  });

  function loadPage(page) {
    import('./escritura_crativa.js')
    .then((module) => {
        const escrituras = module.escrituras;
        mostrarTitulos(escrituras);
    })
    .catch((error) => {
        console.error('Error al importar el módulo:', error);
    });
}

  function mostrarTitulos(escrituras) {
      const contenidoDiv = document.getElementById('contenido');
      contenidoDiv.innerHTML = '';

      // Supongamos que el dominio base es "https://tudominio.com"
      const dominioBaseEscritura = "/escritura_crativa";

      // Crear una lista desordenada (ul)
      const listaEscritura = document.createElement('ul');

      for (let escritura in escrituras) {
          // Crear un elemento de lista (li)
          const listItemEscritura = document.createElement('li');

          // Crear el enlace (a)
          const a = document.createElement('a');
          a.textContent = escrituras[escritura].titulo;

          // Agregar el dominio base y la propiedad 'directorio' como href
          a.href = dominioBaseEscritura + escrituras[escritura].directorio;

          // Agregar el enlace al elemento de lista
          listItemEscritura.appendChild(a);

          // Agregar el elemento de lista a la lista desordenada
          listaEscritura.appendChild(listItemEscritura);
      }

      // Agregar la lista desordenada al contenidoDiv
      contenidoDiv.appendChild(listaEscritura);
  }
});

//Codigo de la Crea tu Libreria

document.addEventListener('DOMContentLoaded', function() {
  var navCrea = document.querySelectorAll('.nav-crea');
  var content = document.getElementById('contenido');

  navCrea.forEach(function(link) {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          var page = this.getAttribute('data-page');
          content.innerHTML = '';
          loadPage(page);
      });
  });

  function loadPage(page) {
    import('./crea_tu_libreria.js')
    .then((module) => {
        const crea = module.crea;
        mostrarTitulos(crea);
    })
    .catch((error) => {
        console.error('Error al importar el módulo:', error);
    });
}

  function mostrarTitulos(crea) {
      const contenidoDiv = document.getElementById('contenido');
      contenidoDiv.innerHTML = '';

      // Supongamos que el dominio base es "https://tudominio.com"
      const dominioBaseCre = "/crea_tu_libreria";

      // Crear una lista desordenada (ul)
      const listaCre = document.createElement('ul');

      for (let cre in crea) {
          // Crear un elemento de lista (li)
          const listItemCre = document.createElement('li');

          // Crear el enlace (a)
          const a = document.createElement('a');
          a.textContent = crea[cre].titulo;

          // Agregar el dominio base y la propiedad 'directorio' como href
          a.href = dominioBaseCre + crea[cre].directorio;

          // Agregar el enlace al elemento de lista
          listItemCre.appendChild(a);

          // Agregar el elemento de lista a la lista desordenada
          listaCre.appendChild(listItemCre);
      }

      // Agregar la lista desordenada al contenidoDiv
      contenidoDiv.appendChild(listaCre);
  }
});