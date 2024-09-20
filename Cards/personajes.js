$(document).ready(function() {
    let peopleData = [];

    // Cargamos el archivo JSON externo con $.ajax
    $.ajax({
        url: 'personajes.json', // Asegúrate de que esta URL sea correcta
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            if (data && data.people) {
                peopleData = data.people; // Asegúrate de que el JSON tenga una clave 'people'
                renderCharacters(peopleData);
            } else {
                console.error('Formato de datos inesperado en JSON');
            }
        },
    });

    // Evento de entrada para el campo de búsqueda
    $('#searchInput').on('input', function() {
        const searchText = $(this).val().toLowerCase();
        const filteredPeople = peopleData.filter(person => 
            person.name.toLowerCase().includes(searchText)
        );
        $('#character-cards').empty(); // Limpiar las tarjetas anteriores
        renderCharacters(filteredPeople); // Mostrar las tarjetas filtradas
    });

    // Función para generar las tarjetas de personajes
    function renderCharacters(people) {
        const $characterCards = $('#character-cards');

        // Iteramos sobre cada personaje y creamos una tarjeta para cada uno
        $.each(people, function(index, person) {
            const cardHtml = `
                <div class="card">
                    <img src="${person.img}" alt="${person.name}">
                    <h3>${person.name}</h3>
                    <p><strong>Gender:</strong> ${person.gender}</p>
                    <p><strong>Age:</strong> ${person.age}</p>
                    <p><strong>Eye Color:</strong> ${person.eye_color}</p>
                    <p><strong>Hair Color:</strong> ${person.hair_color}</p>
                    <p><strong>Species:</strong> ${person.specie}</p>
                </div>
            `;

            // Agregamos la tarjeta al contenedor
            $characterCards.append(cardHtml);
        });
    }
});