import { NavLink } from "react-router-dom"
import "./NavBar.css"
import pokedexHeader from "./pokedex.jpg"

const NavBar = () => {
  return (
    <div className="centrao">

      <nav className="nav">
          <NavLink style={{ textDecoration: 'none' }} to='/'>Cover</NavLink>
          <NavLink style={{ textDecoration: 'none' }} to='/searchPokemon'>Procurar Pokemon</NavLink>
          <NavLink style={{ textDecoration: 'none' }} to='/curiosity'>Curiosidades</NavLink>
        </nav>

        <div className="container">

<img src={pokedexHeader}  style={{width: '110%'}}/>
      
      </div >

    </div>
  )
}

export default NavBar
