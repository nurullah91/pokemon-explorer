import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
    const { id } = useParams();
    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

        axios.get(url)
            .then(data => setPokemonData(data.data))
            .catch(err => console.log(err))
    }, [id])

    console.log(pokemonData);
    return (
        <div className="text-white w-11/12 lg:w-9/12 mx-auto">

            {pokemonData.name &&

                <h1 className="text-5xl text-center uppercase my-4 text-yellow-600">{pokemonData.name}</h1>
            }

            {
                pokemonData.abilities && <h1 className="text-white text-3xl">Pokemon Abilities: {pokemonData.abilities.length}</h1>
            }
            {
                pokemonData.types && <h1 className="text-white text-3xl">Pokemon Types: {pokemonData.types.length}</h1>
            }
            {
                pokemonData.base_experience && <h1 className="text-white text-3xl">Pokemon Base experience: {pokemonData.base_experience}</h1>
            }
        </div>
    );
};

export default PokemonDetails;