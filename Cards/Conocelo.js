$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://ghibliapi.vercel.app/films",
        datatype: "json",
        async: true,
        success: function(datos) {
            mostrarSlider(datos);
        }
    });
});

function mostrarSlider(datos) {
    // Limitar a solo 10 películas
    const datosLimitados = datos.slice(0,10);
    
    datosLimitados.forEach(pelicula => {
        let tarjetaPelicula = $("<div></div>").addClass("film-card");

        $("<img>").attr("src", pelicula.image).addClass("film-image").appendTo(tarjetaPelicula);
        $("<h3></h3>").text(pelicula.title).appendTo(tarjetaPelicula);
        $("<p></p>").text(pelicula.original_title).appendTo(tarjetaPelicula);

        // Hacer la tarjeta clicable
        tarjetaPelicula.click(function() {
            // Redirigir a una nueva página con la ID de la película
            window.location.href = `detalle2.html?id=${pelicula.id}`;
        });

        $(".slider").append(tarjetaPelicula);
    });

    // Inicializa el slider
    $(document).ready(function() {

        $('.slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1, 
            autoplay: true,
            autoplaySpeed: 1500,
          });
    });
}
