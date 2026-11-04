// Busca todos los botones que tienen la clase pregunta.
const preguntas = document.querySelectorAll(".pregunta");

// Recorre cada botón para agregarle una acción.
preguntas.forEach(function (pregunta) {
  // Escucha cuando el usuario hace clic en esta pregunta.
  pregunta.addEventListener("click", function () {
    // Lee el id de la respuesta relacionada con el botón.
    const idRespuesta = pregunta.getAttribute("aria-controls");

    // Busca en el HTML la respuesta usando ese id.
    const respuestaActual = document.getElementById(idRespuesta);

    // Comprueba si la pregunta ya estaba abierta.
    const estabaAbierta = pregunta.getAttribute("aria-expanded") === "true";

    // Recorre nuevamente todos los botones para cerrar sus respuestas.
    preguntas.forEach(function (otroBoton) {
      // Obtiene el id de la respuesta de cada otro botón.
      const idOtraRespuesta = otroBoton.getAttribute("aria-controls");

      // Busca esa respuesta en el documento.
      const otraRespuesta = document.getElementById(idOtraRespuesta);

      // Indica que el botón está cerrado.
      otroBoton.setAttribute("aria-expanded", "false");

      // Oculta la respuesta correspondiente.
      otraRespuesta.hidden = true;

      // Cambia el signo menos por un signo más.
      otroBoton.querySelector(".flecha").textContent = "+";
    });

    // Si la pregunta estaba cerrada, ahora la abrimos.
    if (!estabaAbierta) {
      // Actualiza el estado del botón a abierto.
      pregunta.setAttribute("aria-expanded", "true");

      // Muestra la respuesta seleccionada.
      respuestaActual.hidden = false;

      // Cambia el signo más por un signo menos.
      pregunta.querySelector(".flecha").textContent = "−";
    }
  });
});
