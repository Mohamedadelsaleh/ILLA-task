import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import PokemonDetails from './Components/PokemonDetails';
import { Typography } from '@mui/material';
import './App.css'

function App() {


  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="https://mohamedadelsaleh.github.io/ILLA-task/" element={<Home />} />
          <Route exact path="https://mohamedadelsaleh.github.io/ILLA-task/pokemon/:pokemonId" element={<PokemonDetails />} />
          <Route path="*"  element={<Typography variant="h3" sx={{alignContent:'center',display:'flex', justifyContent:"center", alignItems:"center" , textAlign: 'center', minHeight:"100vh", color: 'black'}}>404 Not Found</Typography>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
