const informacionTorneo = document.getElementById("informacion-torneo");
const listaParticipantes = document.getElementById("lista-participantes");
const listaPartidas = document.getElementById("lista-partidas");
const tablaClasificacion = document.getElementById("tabla-clasificacion");
const listaPremios = document.getElementById("lista-premios");

informacionTorneo.innerHTML = `
    <article class="tarjeta-torneo">
        <h3>${detalleTorneo.nombre}</h3>

        <p>Juego: ${detalleTorneo.juego}</p>
        <p>Modalidad: ${detalleTorneo.modalidad}</p>
        <p>Integrantes por equipo: ${detalleTorneo.integrantesPorEquipo}</p>
        <p>Estado: ${detalleTorneo.estado}</p>

        <p>
            Cupos ocupados:
            ${detalleTorneo.inscritos} / ${detalleTorneo.cupoMaximo}
        </p>

        <p>
            Cupos disponibles:
            ${detalleTorneo.cupoMaximo - detalleTorneo.inscritos}
        </p>

        <p>
            Cierre de inscripción:
            ${detalleTorneo.cierreInscripcion}
        </p>
    </article>
`;

detalleTorneo.participantes.forEach(function (participante) {

    listaParticipantes.innerHTML += `
        <p>${participante}</p>
    `;

});

detalleTorneo.partidas.forEach(function (partida) {

    let centroPartida;

    if (partida.estado === "Finalizada") {
        centroPartida = partida.resultado;
    } else {
        centroPartida = "VS";
    }

    listaPartidas.innerHTML += `
        <article class="tarjeta-partida">

            <div class="encabezado-partida">
            <h3>${partida.ronda}</h3>

            <div>
                <span>${detalleTorneo.formato}</span>
                <span> | ${partida.estado}</span>
            </div>
        </div>

            <div class="enfrentamiento">
                <strong>${partida.equipo1}</strong>

                <span class="resultado">
                    ${centroPartida}
                </span>

                <strong>${partida.equipo2}</strong>
            </div>

            <p>Horario: ${partida.horario}</p>

        </article>
    `;

});