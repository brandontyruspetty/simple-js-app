let pokemonList = [
    {name: 'Dewgong', type: ['ice', 'water'], height: 1.7},
    {name: 'Bastiodon', type: ['steel', 'rock'], height: 1.3},
    {name: 'Woobat', type: ['psychic', 'flying'], height: .4},
];



// create for loop for pokemon iteration
for(let i = 0; i < pokemonList.length; i++) {
    //create name/height variable
let pokemonNameHeight = pokemonList[i].name + ' (height: ' +  pokemonList[i].height  + ')';  
// print conditionals
if(pokemonList[i].height > 1.5){
    document.write('<p>' + pokemonNameHeight  + ' -  WOW! That\'s big! </p>');
} else if(pokemonList[i].height < .5){
    document.write('<p>' + pokemonNameHeight  + ' - He\'s so cute! <p>'); 
}else{
    document.write('<p>' +  pokemonNameHeight + '</p>');
}
}


