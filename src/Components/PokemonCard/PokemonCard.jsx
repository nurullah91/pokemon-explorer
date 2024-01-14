/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const PokemonCard = ({ item }) => {

    const pokemonURL = item.url;
    const segments = pokemonURL.split("/");
    const id = segments[segments.length - 2];
    




    return (
        <div className="bg-gradient-to-br  from-[#171E4A] via-[#41174a] to-[#4a2317] px-6 py-3 my-3 text-slate-300 rounded-r-full">
            <div className="flex justify-between items-center">

                <h1 className="text-4xl capitalize">{item.name}</h1>
                <Link to={`/pokemon-details/${id}` }className="bg-yellow-600 px-3 py-2 text-white rounded-r-full">View Details</Link>
            </div>
        </div>
    );
};

export default PokemonCard;