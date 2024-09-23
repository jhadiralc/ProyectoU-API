$(document).ready(function() {
    let peopleData = [];
    $.ajax({
        url: 'personajes.json', 
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            if (data && data.people) {
                peopleData = data.people; 
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
        $characterCards.empty(); // Limpiamos el contenedor antes de renderizar

        // Iteramos sobre cada personaje y creamos una tarjeta para cada uno
        people.forEach(person => {
            let cardContainer = $("<div></div>").addClass("card");
            $("<img>").attr("src", person.img).attr("alt", person.name).appendTo(cardContainer);
            $("<h3></h3>").text(person.name).appendTo(cardContainer);
            $("<p></p>").html(`<strong>Gender:</strong> ${person.gender}`).appendTo(cardContainer);
            $("<p></p>").html(`<strong>Age:</strong> ${person.age}`).appendTo(cardContainer);
            $("<p></p>").html(`<strong>Eye Color:</strong> ${person.eye_color}`).appendTo(cardContainer);
            $("<p></p>").html(`<strong>Hair Color:</strong> ${person.hair_color}`).appendTo(cardContainer);
            $("<p></p>").html(`<strong>Species:</strong> ${person.specie}`).appendTo(cardContainer);

            // Redirigir a detalle.html con el id del personaje
            cardContainer.click(function() {
                window.location.href = `detalle.html?id=${person.id}`;
            });

            // Agregamos la tarjeta al contenedor
            $characterCards.append(cardContainer);
        });
    }
});
