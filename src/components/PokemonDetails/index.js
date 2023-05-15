import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import "./PokemonDetails.css"

const PokemonDetails = () => {

  const [colorTypes, setColorTypes] = useState([
    {
      name: 'grass',
      colorType: 'green'
    },
    {
      name: 'poison',
      colorType: 'purple'
    },
    {
      name: 'normal',
      colorType: '#f8d5a3'
    },
    {
      name: 'fighting',
      colorType: '#DC143C'
    },
    {
      name: 'flying',
      colorType: '#9370DB'
    },
    {
      name: 'ground',
      colorType: '#F4A460'
    },
    {
      name: 'rock',
      colorType: '#DEB887'
    },
    {
      name: 'bug',
      colorType: '#9ACD32'
    },
    {
      name: 'ghost',
      colorType: '#4B0082'
    },
    {
      name: 'steel',
      colorType: '#DCDCDC'
    },
    {
      name: 'fire',
      colorType: '#FF4500'
    },
    {
      name: 'water',
      colorType: '#1E90FF'
    },
    {
      name: 'electric',
      colorType: '#FFD700'
    },
    {
      name: 'psychic',
      colorType: '#FF00FF'
    },
    {
      name: 'ice',
      colorType: '#AFEEEE'
    },
    {
      name: 'dragon',
      colorType: '#7B68EE'
    },
    {
      name: 'dark',
      colorType: '#8B4513'
    },
    {
      name: 'fairy',
      colorType: '#FF69B4'
    }
  ])

  const [pokemon, setPokemon] = useState(null)

  const { id } = useParams()
  const url = 'https://pokeapi.co/api/v2/pokemon/' + id

  useEffect(() => {
    const getPokemons = async () => {
      const res = await fetch(url)
      const json = await res.json()

      setPokemon(json)
    }
    getPokemons()
  }, [])

  return (
    <div className="center">

      <p className="pokeName">{id} - {pokemon && `${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1,)}`}</p>
      <div style={{ marginTop: '-120px' }}>
        <div className="status">

          <div >
            <div className="colunaDeHabildiades">
              <p className="forStatusTitle">STATUS</p>
              <p></p>
              {pokemon && pokemon.stats.map((item, index) =>
                <div className="filhos" key={index}>{item.stat.name} <hr /> {item.base_stat}</div>)}
            </div>
          </div>

          <div style={{ position: 'relative', margin: '0px' }}>
            <div className="backgroundWall" style={{ margin: '0px' }} ></div>
            {pokemon && <img style={{
              position: 'relative',
              zIndex: '3',
              marginLeft: '-45px',
              marginTop: '100px'
            }} src={pokemon.sprites.other.home.front_default} alt={pokemon && pokemon.name} />}
          </div>

          <div >
            <p className="forTiposTitle">TIPO</p>

            {pokemon && pokemon.types.map((item, index) => {

              const color = colorTypes.find((itens) =>
                itens.name === item.type.name
              )['colorType']
              return (
                <div className="typesForDetails" key={index}>
                  <p
                    style={{ backgroundColor: color }}
                  >{item.type.name}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="forLastHabilidades">HABILIDADES
          {pokemon && pokemon.abilities.map((item, index) =>
            <p key={index}>{`${item.ability.name[0].toUpperCase()}${item.ability.name.slice(1,)}`}</p>)}
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails