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
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    };

    //adding showModal function with event listener
    function showModal(pokemon) {
        let pokemonModal = document.querySelector('#pokemon-modal');


        //Clear all existing modal content
        pokemonModal.innerText = '';

        //Add modal
        let modal = document.createElement('div');
        modal.classList.add('modal');

        //add the new modal content
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

        let titleElement = document.createElement('h1');
        titleElement.innerText = pokemon.name;

        let heightElement = document.createElement('p');
        heightElement.innerText = 'Height: ' + pokemon.height;

        let imageElement = document.createElement('img');
        imageElement.src = pokemon.imageUrl;

        //appending the previous elements to modal container
        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(heightElement);
        modal.appendChild(imageElement);
        pokemonModal.appendChild(modal);

        pokemonModal.classList.add('is-visible');
    }

    function hideModal() {
        let pokemonModal = document.querySelector('#pokemon-modal');
        pokemonModal.classList.remove('is-visible');
    }
    //hides the modal when clicking on escape
    window.addEventListener('keydown', (e) => {
        let pokemonModal = document.querySelector('#pokemon-modal');
        if (e.key === 'Escape' && pokemonModal.classList.contains('is-visible')) {
            hideModal();
        }
    });

    //Hides the modal when clicking on the modal container
    let pokemonModal = document.querySelector('#pokemon-modal');
    pokemonModal.addEventListener('click', (e) => {
        let target = e.target;
        if (target === pokemonModal) {
            hideModal();
        }
    });

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
