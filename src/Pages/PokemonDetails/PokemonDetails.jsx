import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountUp from 'react-countup';
import { PropagateLoader } from "react-spinners";

const PokemonDetails = () => {
    const { id } = useParams();
    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

        axios.get(url)
            .then(data => setPokemonData(data.data))
            .catch(err => console.log(err))
    }, [id])


    const { abilities, types, base_experience, moves, stats, name, weight } = pokemonData;

    console.log({ abilities, types, base_experience, moves, stats, name, weight })
    // console.log(pokemonData);
    return (
        pokemonData.name ? <div className="text-white w-11/12 lg:w-9/12 mx-auto">

            {name &&

                <h1 className="text-5xl text-center uppercase my-4 text-yellow-600">{name}</h1>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    abilities && <div className="border-2 border-yellow-400 px-4 py-2 rounded-md hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#030e59] via-[#07152e] to-[#4a2317]">
                        <h1 className="text-slate-300 text-3xl">Abilities</h1> {abilities.map((item, index) => <li key={index}>{item.ability?.name}</li>)}

                    </div>
                }

                {
                    types && <div className="border-2 border-yellow-400 px-4 py-2 rounded-md hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#030e59] via-[#07152e] to-[#4a2317]">

                        <h1 className="text-slate-300 text-3xl">Types</h1>

                        {types.map((item, index) => <li key={index}>{item.type?.name} </li>)}

                    </div>
                }

                {
                    base_experience && <div className="border-2 border-yellow-400 px-4 py-2 rounded-md hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#030e59] via-[#07152e] to-[#4a2317]">
                        <h1 className="text-slate-300 text-3xl text-center"><CountUp end={base_experience} /></h1>
                        <h1 className="text-center">
                            Base experience
                        </h1>

                    </div>
                }
                {
                    weight && <div className="border-2 border-yellow-400 px-4 py-2 rounded-md hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#030e59] via-[#07152e] to-[#4a2317]">
                        <h1 className="text-slate-300 text-3xl text-center"><CountUp end={weight} /></h1>
                        <h1 className="text-center">
                            Weight
                        </h1>

                    </div>
                }
                {
                    moves && <div className="border-2 border-yellow-400 px-4 py-2 rounded-md hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#030e59] via-[#07152e] to-[#4a2317]">

                        <h1 className="text-slate-300 text-3xl">Moves</h1>

                        {moves.length > 5 ? moves.slice(0, 5).map((item, index) => <li key={index}>{item.move?.name} </li>)
                            :
                            moves.map((item, index) => <li key={index}>{item.move?.name} </li>)}

                        {
                            moves.length > 5 && <li>{moves.length - 5} more</li>
                        }

                    </div>
                }

{
                    stats && <div className="border-2 border-yellow-400 px-4 py-2 rounded-md hover:scale-110 transition-all duration-300 bg-gradient-to-br from-[#030e59] via-[#07152e] to-[#4a2317]">

                        <h1 className="text-slate-300 text-3xl">Stats</h1>

                        {stats.length > 5 ? stats.slice(0, 5).map((item, index) => <li key={index}>{item.stat?.name} </li>)
                            :
                            stats.map((item, index) => <li key={index}>{item.stat?.name} </li>)}

                        {
                            stats.length > 5 && <li>{stats.length - 5} more</li>
                        }

                    </div>
                }


            </div>

        </div> :
            <div className='my-10 w-11/12 lg:w-9/12 mx-auto text-center bg-[#] flex flex-col items-center justify-center'>
                <PropagateLoader color="#f2853b" />
                
            </div>
    );
};

export default PokemonDetails;