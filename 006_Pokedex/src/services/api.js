import axios from 'axios';

const pokemons_number = 150;

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

class PokedexAPI {

    async fetchPokemons() {
        let pokemons = [];
        for (let i = 0; i < pokemons_number; i++) {
            let pokemon = await this.getPokemon(i + 1);
            pokemons.push(pokemon);
        }

        return pokemons;
    };

    async getPokemon(id) {
        let result = await api.get('pokemon/' + id);
        return result.data;
    }
}

export default new PokedexAPI();