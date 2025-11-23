// script.js

// Espera a que la página cargue
window.onload = function() {
    // Seleccionamos el h1 por su id
    const h1 = document.getElementById("titulo");

    // Cambiamos el texto automáticamente al cargar
    h1.textContent = "Bienvenido a mi página!";

    // Agregamos un evento al hacer clic
    h1.addEventListener("click", function() {
        h1.textContent = "¡Haz hecho clic en el título!";
        h1.style.color = "red"; // Cambiamos el color del texto
    });
};