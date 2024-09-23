$(document).ready(function() {
    // Realizamos la petición AJAX a la API de Studio Ghibli Locations
    $.ajax({
        url: 'https://ghibliapi.vercel.app/locations',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            // Recorremos los datos y creamos las tarjetas dinámicamente
            data.forEach(function(location) {
                // Crear una tarjeta por cada ubicación
                const card = `
                <div class="card">
                    <div class="card-body">
                        <h2>${location.name}</h2>
                        <p><strong>Clima:</strong> ${location.climate}</p>
                        <p><strong>Terreno:</strong> ${location.terrain}</p>
                        <p><strong>Superficie del agua:</strong> ${location.surface_water}%</p>
                    </div>
                </div>`;
                // Añadimos la tarjeta al contenedor
                $('#card-container').append(card);
            });
        },
        error: function(error) {
            console.error("Error al obtener los datos:", error);
        }
    });
});
