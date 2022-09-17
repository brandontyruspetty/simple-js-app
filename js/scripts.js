//create pokemonRepository variable
let pokemonRepository = (function(){
let pokemonList= [
    {name: 'Dewgong', type: ['ice', 'water'], height: 1.7},
    {name: 'Bastiodon', type: ['steel', 'rock'], height: 1.3},
    {name: 'Woobat', type: ['psychic', 'flying'], height: .4},
];
//create a return for key-value pairs
function add(pokemon) {
    pokemonList.push(pokemon);
}
function getAll() {
    return pokemonList;
}
return {
    add: add,
    getAll: getAll
};
})()

pokemonRepository.add({name: 'Pikachu'});
console.log(pokemonRepository.getAll());


//cannot figure out how to link to the IIFE above
pokemonList.forEach(function(pokemon) {
    
let pokemonNameHeight = pokemon.name + ' (height: ' +  pokemon.height  + ')';  
if(pokemon.height > 1.5){
    document.write('<p>' + pokemonNameHeight  + ' -  WOW! That\'s big! </p>');
} else if(pokemon.height < .5){
    document.write('<p>' + pokemonNameHeight  + ' - He\'s so cute! <p>'); 
}else{
    document.write('<p>' +  pokemonNameHeight + '</p>');
}
});


