import axios from "axios"

export async function getPokemanoAll (){
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        return response.data
    } catch(error){
        console.error("Error ao buscar Pokemano", error)
    }
}