const formularioFiltros = document.getElementById("form-filtros");
const listaTorneosCompleta = document.getElementById("lista-torneos-completa");
const mensajeFiltro = document.getElementById("mensaje-filtro");


function mostrarTorneos(lista) {

    listaTorneosCompleta.innerHTML = "";

    if (lista.length === 0) {
        listaTorneosCompleta.innerHTML = "<p>No se encontraron torneos.</p>";
        return;
    }

    lista.forEach(function (torneo) {

        listaTorneosCompleta.innerHTML += `
            <article class="tarjeta-torneo">
                <h3>${torneo.nombre}</h3>
                <p>Juego: ${torneo.juego}</p>
                <p>Estado: ${torneo.estado}</p>
                <p>Cupos: ${torneo.inscritos} / ${torneo.cupoMaximo}</p>
                <p>Cierre de inscripción: ${torneo.cierreInscripcion}</p>
            </article>
        `;
    });
}


mostrarTorneos(torneos);