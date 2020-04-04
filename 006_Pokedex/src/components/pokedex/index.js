import React, {useState, useEffect} from 'react';
import Card from '../../components/card';
import api from '../../services/api';

import './styles.css';

export default function Pokedex() {
    const[data, setData] = useState([]);

    useEffect(() => {
        api.fetchPokemons().then((pokemons) => {
            setData(pokemons);
        }, [data]);
    });

    return (
        <section>
            {
                data.map((pokemon, index) => {
                    return (
                        <Card key={index} poke={pokemon} />
                    )
                })        
            }
        </section>
    );
}