let pokemonList = [
    {name: 'Dewgong', type: ['ice', 'water'], height: 1.7},
    {name: 'Bastiodon', type: ['steel', 'rock'], height: 1.3},
    {name: 'Woobat', type: ['psychic', 'flying'], height: .4},
];



// create for forEach loop for pokemon iteration
pokemonList.forEach(function(pokemon) {
    //create name/height variable
let pokemonNameHeight = pokemon.name + ' (height: ' +  pokemon.height  + ')';  
// print conditionals
if(pokemon.height > 1.5){
    document.write('<p>' + pokemonNameHeight  + ' -  WOW! That\'s big! </p>');
} else if(pokemon.height < .5){
    document.write('<p>' + pokemonNameHeight  + ' - He\'s so cute! <p>'); 
}else{
    document.write('<p>' +  pokemonNameHeight + '</p>');
}
})


