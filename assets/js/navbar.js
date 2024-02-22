// Obtener el navbar
const navbar = document.getElementById("navbar");

// Variable para guardar la posición actual del scroll
let prevScrollpos = window.scrollY;

// Función para manejar el evento de scroll
window.onscroll = function() {
    // Obtener la posición actual del scroll
    const currentScrollPos = window.scrollY;
    // Si la posición anterior es mayor que la actual, mostrar el navbar
    if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
    } else {
    // Si la posición anterior es menor que la actual, ocultar el navbar
    navbar.style.top = "-100%"; // Ajusta el valor según el tamaño de tu navbar
    }

    // Actualizar la posición anterior con la posición actual
    prevScrollpos = currentScrollPos;
}