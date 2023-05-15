import { NavLink } from "react-router-dom"
import "./NavBar.css"
import pokedexHeader from "./pokedex.jpg"

const NavBar = () => {
  return (
    <div className="centrao">
      <div className="container">

        <div style={{
          backgroundImage: `url(${pokedexHeader})`,
          backgroundSize: 'contain',
          height: '120px',
          marginLeft: '480px',
          backgroundRepeat: 'no-repeat',
          display: 'flex',


        }}>
        </div>

        <nav className="nav">

          <NavLink style={{ textDecoration: 'none' }} to='/'>Cover</NavLink>
          <NavLink style={{ textDecoration: 'none' }} to='/searchPokemon'>Procurar Pokemon</NavLink>
          <NavLink style={{ textDecoration: 'none' }} to='/curiosity'>Curiosidades</NavLink>

        </nav>


      </div >
    </div>
  )
}

export default NavBar
