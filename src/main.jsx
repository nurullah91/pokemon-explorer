import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import PokemonDetails from './Pages/PokemonDetails/PokemonDetails.jsx';
import Error from './Pages/Error/Error.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "pokemon-details/:id",
        element: <PokemonDetails></PokemonDetails>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />   
  </React.StrictMode>,
)
