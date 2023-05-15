import './App.css';
import PokemonDetails from "./components/PokemonDetails"
import { Routes, Route } from 'react-router-dom';
import Cover from './components/Cover';

import NavBar from './NavBar';
import SearchPoke from './components/SearchPoke';
import Curiosidades from './components/Curiosidades';


function App() {
  return (

    <div className='App'>

      <NavBar />

      <Routes>

        <Route path='/' element={<Cover />} />

        <Route path='/searchPokemon' element={<SearchPoke />} />
        <Route path="/pokemonDetails/:id" element={<PokemonDetails />} />
        <Route path="/pokemonSearch/:id" element={<PokemonDetails />} />

        <Route path='/curiosity' element={<Curiosidades />} />

      </Routes>

    </div>
  );
}

export default App;