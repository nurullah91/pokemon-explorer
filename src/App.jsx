
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [pokemon, setPokemon] = useState([]);


  useEffect( ()=>{
    const url = "https://pokeapi.co/api/v2/pokemon?limit=20";

    axios.get(url)
    .then(data=>setPokemon(data.data.results))
    .catch(err=>console.log(err))
  },[])

console.log(pokemon);



  return (
    <>
      <Navbar></Navbar>
      <div className='min-h-screen flex items-center'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>

    </>
  )
}

export default App
