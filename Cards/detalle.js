$(document).ready(function() {
    let parametrosURL = new URLSearchParams(window.location.search);
    let idPelicula = parametrosURL.get('id');

    if (idPelicula) {
        $.ajax({
            type: "GET",
            url: `https://ghibliapi.vercel.app/films/${idPelicula}`,
            datatype: "json",
            async: true,
            success: function(pelicula) {
                mostrarDetalle(pelicula);
            }
        });
    }
});

function mostrarDetalle(pelicula) {
    $("#titulo").text(pelicula.title);
    $("#imagen").attr("src", pelicula.image);
    $("#titulo-original").text(`Título original: ${pelicula.original_title}`);
    $("#descripcion").text(pelicula.description);
    $("#fecha-lanzamiento").text(`Fecha de lanzamiento: ${pelicula.release_date}`);
    $("#director").text(`Director: ${pelicula.director}`);
    $("#productor").text(`Productor: ${pelicula.producer}`);
}
