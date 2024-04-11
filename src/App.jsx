import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './page/HomePage'
import PokedexPage from './page/PokedexPage'
import PokeDetailPage from './page/PokeDetailPage'
import ProtectedRoutes from './page/ProtectedRoutes'


function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route element={<ProtectedRoutes/>}>
        <Route path='/pokedex' element={<PokedexPage/>}/>
        <Route path='/pokedex/:name' element={<PokeDetailPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
