const input = document.querySelector("#searchInput");
let filmsData = [];

window.addEventListener("DOMContentLoaded", () => {
    console.log("loaded"); 

    $.ajax({
        type: "GET",
        url: "https://ghibliapi.vercel.app/films",
        dataType: "json", // Corregido a "dataType" para el formato correcto
        async: true,
        success: function(data){
            filmsData = data;
            mostrarInfo(filmsData); 
        }
    });
});

// Filtro de búsqueda cuando se ingresa texto en el input
input.addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredFilms = filmsData.filter(film => 
        film.title.toLowerCase().includes(searchText)
    );
    $("#film-container").empty(); // Vaciar las tarjetas anteriores
    mostrarInfo(filteredFilms);   // Mostrar las nuevas tarjetas filtradas
});

// Función para mostrar la información de las películas
function mostrarInfo(data) {
    const filmContainer = $("#film-container"); // Referencia al contenedor

    data.forEach(film => {
        // Crear la tarjeta de la película
        let filmCard = $("<div></div>").addClass("film-card");

        // Añadir la imagen, título y título original a la tarjeta
        $("<img>").attr("src", film.image).addClass("film-image").appendTo(filmCard);
        $("<h3></h3>").text(film.title).appendTo(filmCard);
        $("<p></p>").text(film.original_title).appendTo(filmCard);

        // Hacer la tarjeta clicable para redirigir a la página de detalles
        filmCard.click(function() {
            window.location.href = `detalle.html?id=${film.id}`;
        });

        // Añadir la tarjeta de película al contenedor
        filmContainer.append(filmCard);
    });
}
