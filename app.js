// Manejar el evento de clic en los enlaces del menú para mostrar las secciones correspondientes
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const target = this.getAttribute('href').substring(1);
        scrollToSection(target);
      });
    });
  });
  
  // Función para desplazarse a la sección correspondiente al hacer clic en un enlace
  function scrollToSection(target) {
    const section = document.getElementById(target);
    const sectionTop = section.offsetTop;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  }
  