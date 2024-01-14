import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountUp from 'react-countup';

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
       pokemonData.name? <div className="text-white w-11/12 lg:w-9/12 mx-auto">

            {pokemonData.name &&

                <h1 className="text-5xl text-center uppercase my-4 text-yellow-600">{pokemonData.name}</h1>
            }
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    pokemonData.abilities && <div className="border-2 border-yellow-400 px-4 py-2 rounded-md hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#030e59] via-[#07152e] to-[#4a2317]">
                        <h1 className="text-slate-300 text-3xl">Abilities</h1> {pokemonData.abilities.map((item, index) => <li key={index}>{item.ability?.name}</li>)}

                    </div>
                }

                {
                    pokemonData.types && <div className="border-2 border-yellow-400 px-4 py-2 rounded-md hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#030e59] via-[#07152e] to-[#4a2317]">

                        <h1 className="text-slate-300 text-3xl">Types</h1>

                        {pokemonData.types.map((item, index) => <li key={index}>{item.type?.name} </li>)}

                    </div>
                }

                {
                    pokemonData.base_experience && <div className="border-2 border-yellow-400 px-4 py-2 rounded-md hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#030e59] via-[#07152e] to-[#4a2317]">
                        <h1 className="text-slate-300 text-3xl text-center"><CountUp end={pokemonData.base_experience} /></h1>
                       <h1 className="text-center">
                       Base experience               
                        </h1>

                    </div>
                }
            </div>

        </div> : 
        <div className='my-10 w-11/12 lg:w-9/12 mx-auto'>
        <h2 className="text-3xl text-center text-slate-500">No Pokemon data right now!</h2>
    </div>
    );
};

export default PokemonDetails;