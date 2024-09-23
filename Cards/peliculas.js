//S
const entrada = document.querySelector("#searchInput"); 
let datosPeliculas = [];
//S
$(document).ready(function() {

    $.ajax({
        type: "GET",
        url: "https://ghibliapi.vercel.app/films",
        dataType: "json",
        async: true,
        success: function(datos) {
            datosPeliculas = datos;
            mostrarInfo(datosPeliculas);
        }
    });
});

// Filtro de búsqueda cuando se ingresa texto en el input
entrada.addEventListener("input", (e) => {
    const textoBusqueda = e.target.value.toLowerCase();
    const peliculasFiltradas = datosPeliculas.filter(pelicula =>
        pelicula.title.toLowerCase().includes(textoBusqueda)
    );
    $("#film-container").empty(); // Vaciar las tarjetas anteriores
    mostrarInfo(peliculasFiltradas); // Mostrar las nuevas tarjetas filtradas
});


function mostrarInfo(datos) {
    const contenedorPeliculas = $("#film-container"); 

    datos.forEach(pelicula => {
        
        let tarjetaPelicula = $("<div></div>").addClass("film-card");
        
        $("<img>").attr("src", pelicula.image).addClass("film-image").appendTo(tarjetaPelicula);
        $("<h3></h3>").text(pelicula.title).appendTo(tarjetaPelicula);
        $("<p></p>").text(pelicula.original_title).appendTo(tarjetaPelicula);

        tarjetaPelicula.click(function() {
            window.location.href = `detalle.html?id=${pelicula.id}`;
        });

        contenedorPeliculas.append(tarjetaPelicula);
    });
}
