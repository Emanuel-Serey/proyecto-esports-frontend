const formularioInscripcion = document.getElementById("form-inscripcion");

const mensajeInscripcion = document.getElementById("mensaje-inscripcion");

const resumenInscripcion = document.getElementById("resumen-inscripcion");

const campoEquipo = document.getElementById("campo-equipo");

const opcionJugador = document.getElementById("jugador");

const opcionEquipo = document.getElementById("equipo");

opcionJugador.addEventListener("change", function () {
    campoEquipo.style.display = "none";
});

opcionEquipo.addEventListener("change", function () {
    campoEquipo.style.display = "block";
});