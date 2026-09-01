const formularioEquipo =
    document.getElementById("form-equipo");

const mensajeEquipo =
    document.getElementById("mensaje-equipo");

const nuevoIntegrante =
    document.getElementById("nuevo-integrante");

const rolIntegrante =
    document.getElementById("rol-integrante");

const botonAgregar =
    document.getElementById("btn-agregar-integrante");

const listaIntegrantes =
    document.getElementById("lista-integrantes");

const tituloIntegrantes =
    document.getElementById("titulo-integrantes");

const botonCrearEquipo =
    document.getElementById("btn-crear-equipo");

const seccionIntegrantes =
    document.getElementById("integrantes-equipo");


const integrantes = [];

let equipoActual = null;


// MOSTRAR INTEGRANTES

function mostrarIntegrantes() {

    listaIntegrantes.innerHTML = "";

    if (integrantes.length === 0) {
        listaIntegrantes.innerHTML =
            "<p>Aún no hay integrantes en el equipo.</p>";
        return;
    }

    integrantes.forEach(function (integrante, indice) {

        const botonQuitar =
            integrante.rol === "Capitán"
                ? ""
                : `
                <button
                    type="button"
                    class="boton-quitar"
                    data-indice="${indice}"
                >
                    Quitar
                </button>
            `;

        listaIntegrantes.innerHTML += `
        <div class="integrante">
            <span>${integrante.jugador}</span>
            <span>${integrante.rol}</span>
            ${botonQuitar}
        </div>
    `;
    });


    const botonesQuitar =
        document.querySelectorAll(".boton-quitar");


    botonesQuitar.forEach(function (boton) {

        boton.addEventListener("click", function () {

            const indice =
                boton.getAttribute("data-indice");

            integrantes.splice(indice, 1);

            mostrarIntegrantes();

        });

    });

}