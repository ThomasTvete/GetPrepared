// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("Fant ikke noen Pokemon med det navnet")
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.weight))
//     .catch(error => console.log(error));


let pokemonSprite = "";
updateView();
fetchPokemon();

async function fetchPokemon(){
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Fant ikke noen Pokemon med det navnet")
        }

        const data = await response.json();
        pokemonSprite = data.sprites.front_default;
        


    }
    catch(error){
        console.error(error);
    }
    updateView();
}

function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    <input type ="text" id="pokemonName" placeholder ="Skriv inn en Pokemon">
    <button onclick="fetchPokemon()">Finn Pokemon</button><br>
    <img src=${pokemonSprite} alt="Pokemonbilde" id="pokemonSprite" style="display: ${pokemonSprite === "" ? "none" : "block"}">
    `;
}