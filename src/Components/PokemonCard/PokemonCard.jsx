/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const PokemonCard = ({ item }) => {

    const pokemonURL = item.url;
    const segments = pokemonURL.split("/");
    const id = segments[segments.length - 2];
    




    return (
        <div className="bg-gradient-to-br  from-[#171E4A] via-[#41174a] to-[#4a2317] px-3 md:px-6 py-3 my-3 text-slate-300 rounded-r-full hover:scale-105 transition-all duration-300">
            <div className="flex justify-between items-center overflow-hidden">

                <h1 className="text-2xl md:text-4xl capitalize">{item.name}</h1>
                <Link to={`/pokemon-details/${id}` }className="bg-yellow-600 pl-1 pr-3 py-1 md:px-3 md:py-2 text-white rounded-r-full">View Details</Link>
            </div>
        </div>
    );
};

export default PokemonCard;