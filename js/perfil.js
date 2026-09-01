const datosJugador =
    document.getElementById("datos-jugador");

const listaEquiposJugador =
    document.getElementById("lista-equipos-jugador");

const listaHistorial =
    document.getElementById("lista-historial");

const datosEstadisticas =
    document.getElementById("datos-estadisticas");

const listaSanciones =
    document.getElementById("lista-sanciones");

const formularioApodo =
    document.getElementById("form-apodo");

const nuevoApodo =
    document.getElementById("nuevo-apodo");

const mensajeApodo =
    document.getElementById("mensaje-apodo");


// DATOS DEL JUGADOR

datosJugador.innerHTML = `
    <p>Nombre: ${usuarioActual.nombre}</p>
    <p>Apodo: ${usuarioActual.apodo}</p>
    <p>Correo: ${usuarioActual.correo}</p>
`;


// EQUIPOS

perfilJugador.equipos.forEach(function (equipo) {

    listaEquiposJugador.innerHTML += `
        <p>${equipo}</p>
    `;

});
