//create pokemonRepository variable
let pokemonRepository = (function(){
let pokemonList= []

//create a return for key-value pairs
function add(pokemon) {
    pokemonList.push(pokemon);
}
function getAll() {
    return pokemonList;
}

function showDetails(pokemon){
    console.log(pokemon)
};

function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    //create button for individual pokemons
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokebutton');
    //attach button to listItem
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    //added listening event for button to write pokemon name in console when clicked
    button.addEventListener('click', function(event){  
        showDetails(pokemon); 
    });
};

return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
};
})()

pokemonRepository.add({name: 'Dewgong', type: ['ice', 'water'], height: 1.7});
pokemonRepository.add({name: 'Bastiodon', type: ['steel', 'rock'], height: 1.3});
pokemonRepository.add({name: 'Woobat', type: ['psychic', 'flying'], height: .4});
pokemonRepository.add({name: 'Pikachu'});

console.log(pokemonRepository.getAll());


pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon)
});