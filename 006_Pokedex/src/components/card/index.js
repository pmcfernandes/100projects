import React, {useState, useEffect} from 'react';

import './styles.css';

export default function Card(props) {
    const [pokemon, setPokemon] = useState ({});
 
    const colors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5'
    };

    const pokemonTypes = Object.keys(colors);

    useEffect(() => {
        setPokemon(props.poke);
    }, [pokemon]);

    function getImage() {
        return 'https://pokeres.bastionbot.org/images/pokemon/' + pokemon.id + '.png';
    }

    function formatNumber(number) {
        return ('000' + number).substr(-3);
    }

    function getPokemonType(pokemon) {
        try {
            let pokemon_types = pokemon.types.map(type => {
                return type.type.name
            });

            return pokemonTypes.find(type => {
                return pokemon_types.indexOf(type) > -1
            });
        } catch {
            return '';
        }
    }

    function getColor(pokemon) {
        let type = getPokemonType(pokemon);
        return colors[type];
    }

    return (
       <div className="card" style={{backgroundColor: getColor(pokemon)}}>
           <div className="img-circle">
                <img src={ getImage() } alt={ pokemon.name }></img>
           </div>
           <span># { formatNumber(pokemon.id) }</span>
           <h3>{ pokemon.name }</h3>
           <p>Type: { getPokemonType(pokemon) } </p>
       </div>
    );
}