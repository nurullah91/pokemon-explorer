
import { useEffect, useState } from 'react'
import axios from 'axios'
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import { FaSearch } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';


const Home = () => {


    const [pokemon, setPokemon] = useState([]);


    // fetch all pokemon from API
    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=20";

        axios.get(url)
            .then(data => setPokemon(data.data.results))
            .catch(err => console.log(err))
    }, [])

    // Function for search pokemon
    const handleSearch = event => {
        event.preventDefault();
        const searchText = event.target.text.value;

        if (searchText) {
            // make the text lowercase to avoid error
            const searchLowercase = searchText.toLowerCase()
            const url = `https://pokeapi.co/api/v2/pokemon/${searchLowercase}`;
            // get data using axios 
            axios.get(url)
                .then(data => setPokemon(data.data.forms))
                .catch(err => {
                    toast.error('Pokemon not found.')
                    setPokemon([]);
                    console.log(err)
                })
        }
        else {
            toast.error("You don't entered any text")
        }

        // if api don't work this filter method can be used

        // // fetch all the pokemon data again for avoid empty search without reload and then right search 
        // const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
        // axios.get(url)
        //     .then(data => {
        //         const searchedPokemon = data.data.results.filter(item => item.name === searchLowercase);
        //         setPokemon(searchedPokemon)
        //     })
        //     .catch(err => console.log(err))
        // const searchedPokemon = pokemon.filter(item => item.name === searchLowercase);
        // setPokemon(searchedPokemon)
    }


    const handleFilter = e => {
        const filterName = e.target.value;
        if (filterName !== "select") {
            const url = `https://pokeapi.co/api/v2/type/${filterName}/`;

            axios.get(url)
                .then(data => {
                    const dataArray = data.data.pokemon;

                    // make a new array for setPokemon 
                    const newArray = dataArray.map(item => ({
                        name: item.pokemon.name,
                        url: item.pokemon.url
                    }))
                    setPokemon(newArray)
                })
                .catch(err => {
                    toast.error('something went wrong. Try again');
                    console.log(err)
                })
        }

    }

    return (
        <div className='w-11/12 lg:w-9/12 mx-auto my-12'>
            {/* React toast */}
            <Toaster />

            <h2 className="text-center text-4xl font-bold text-slate-300">List of Pokémon</h2>
            <div className='flex flex-col md:flex-row justify-between gap-5 md:items-center'>
                <form onSubmit={handleSearch}>
                    <div className="flex md:justify-center items-center gap-2">
                        <input type="text"
                            name='text'
                            placeholder='bulbasaur' className='py-2 px-4 rounded border-2 bg-transparent border-yellow-400 text-white' />
                        <button className='text-3xl text-yellow-400'><FaSearch /></button>
                    </div>
                </form>

                <div>
                    <select onChange={handleFilter} className='px-4 py-2 bg-transparent border-2 border-yellow-400 text-white rounded' name="sort">


                        <option className='bg-[#0a0d22] text-white' value="select">Sort by type</option>
                        <option className='bg-[#0a0d22] text-white' value="grass">Grass</option>

                        <option className='bg-[#0a0d22] text-white' value="poison">Poison</option>

                        <option className='bg-[#0a0d22] text-white' value="fire">Fire</option>

                        <option className='bg-[#0a0d22] text-white' value="flying">Flying</option>

                        <option className='bg-[#0a0d22] text-white' value="water">Water</option>

                        <option className='bg-[#0a0d22] text-white' value="grass">Grass</option>

                        <option className='bg-[#0a0d22] text-white' value="bug">Bug</option>

                        <option className='bg-[#0a0d22] text-white' value="normal">Normal</option>

                    </select>
                </div>
            </div>
            <div className="mt-10">

                {
                    pokemon.length > 0 ? pokemon.map((item, index) => <PokemonCard key={index} item={item} />) : <div className='my-10'>
                        <h2 className="text-3xl text-center text-slate-500">No Pokemon data right now!</h2>
                    </div>
                }
            </div>

        </div>
    );
};

export default Home;