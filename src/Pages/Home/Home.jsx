
import { useEffect, useState } from 'react'
import axios from 'axios'
import PokemonCard from '../../Components/PokemonCard/PokemonCard';

const Home = () => {


    const [pokemon, setPokemon] = useState([]);


    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=20";

        axios.get(url)
            .then(data => setPokemon(data.data.results))
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='w-11/12 lg:w-9/12 mx-auto mt-12'>
                {
                    pokemon.map((item, index) =><PokemonCard key={index} item={item}/>)
                }

        </div>
    );
};

export default Home;