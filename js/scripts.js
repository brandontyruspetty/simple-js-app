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
return {
    add: add,
    getAll: getAll,
};
})()

// console.log(pokemonRepository)

pokemonRepository.add({name: 'Dewgong', type: ['ice', 'water'], height: 1.7});
pokemonRepository.add({name: 'Bastiodon', type: ['steel', 'rock'], height: 1.3});
pokemonRepository.add({name: 'Woobat', type: ['psychic', 'flying'], height: .4});
pokemonRepository.add({name: 'Pikachu'});



pokemonRepository.getAll().forEach(function(pokemon) {
    
let pokemonNameHeight = pokemon.name + ' (height: ' +  pokemon.height  + ')';  
if(pokemon.height > 1.5){
    document.write('<p>' + pokemonNameHeight  + ' -  WOW! That\'s big! </p>');
} else if(pokemon.height < .5){
    document.write('<p>' + pokemonNameHeight  + ' - He\'s so cute! <p>'); 
}else{
    document.write('<p>' +  pokemonNameHeight + '</p>');
}
});
