//create pokemonRepository variable
let pokemonRepository = (function () {
    let pokemonList = [];
    //add pokemon API
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    //create a return for key-value pairs
    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('#list-group');
        let listItem = document.createElement('li');
        //added Bootstrap list-group-item class
        listItem.classList.add('list-group-item');
        //create button for individual pokemons
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokebutton');
        button.setAttribute('data-toggle', 'modal');
        button.setAttribute('data-target', '#pokemon-modal')
        //Added Bootstrap button utility
        button.classList.add('btn');
        //attach button to listItem
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        //added listening event for button to write pokemon name in console when clicked
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        });
    };
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                // console.log(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Details added to item
            item.imageUrlFront = details.sprites.front_default;
            item.imageUrlBack = details.sprites.back_default;
            item.height = details.height;
            item.weight = details.weight;
            item.types = details.types;
            item.abilities = details.abilities;
        }).catch(function (e) {
            console.error(e);
        });
    }
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    };
 
    function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");
    //Clear existing content of modal
    modalTitle.empty();
    modalBody.empty();

    //Create element for name in modal content
    let nameElement = $("<h1>" + pokemon.name + "</h1>");
    //Create img in modal content
    let imageElementFront = $('<img class="modal-img" style="width:50%">');
    imageElementFront.attr("src", pokemon.imageUrlFront);
    let imageElementBack = $('<img class="modal-img" style="width:50%">');
    imageElementBack.attr("src", pokemon.imageUrlBack);
    //Create element for height in modal content
    let heightElement = $("<p>" + "height : " + pokemon.height + "<p>");
    //Create element for weight in modal content
    let weightElement = $("<p>" + "weight : " + pokemon.weight + "<p>");
    //Create element for type in modal content
    let typesElement = $("<p>" + "types : " + pokemon.types + "<p>");
    //Create element for abilities in modal content
    let abilitiesElement = $("<p>" + "abilities : " + pokemon.abilities + "<p>");
    
    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    }
})();

pokemonRepository.loadList().then(function () {
    //Now the data is loaded!
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
