import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import "./SearchPoke.css"

const SearchPoke = () => {

  const refFocus = useRef()

  const [pokeName, setPokeName] = useState('')
  const [list, setList] = useState(null)

  const [loading, setLoading] = useState(false)
  const [initialLoading, setInitialLoading] = useState(false)

  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`

  const getPokeSerach = async () => {
    setLoading(true)
    setPokeName('')
    refFocus.current.focus()

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setList(data))
      .catch((error) => setList(null))
      .finally(() => {
        setLoading(false)
        setInitialLoading(true)
      })
  }

  return (
    <div className="colorBackground">

      <div className="inputAndButton">
        <h1>Procurar Pokemon por Nome ou Número</h1>

        <input
          ref={refFocus}
          className="forInputOnly"
          type="text"
          value={pokeName}
          onChange={e => setPokeName(e.target.value.toLowerCase())}
          placeholder="PokeSearch"
        />

        {!loading && <button
          className="forButton"
          disabled={!pokeName || pokeName === '.'}
          onClick={() => getPokeSerach()}
        >Procurar</button>}

        {loading && <button
          className="forDisable"
          disabled>Aguarde...</button>}
      </div>

      <div style={{ textAlign: 'center' }}>
        {list && !loading && <h2>{list.id} - {`${list.name[0].toUpperCase()}${list.name.slice(1,)}`}</h2>}

        {list && !loading && <img src={list.sprites.other["official-artwork"].front_default} alt={list.name} />}

        {loading && <h2>Carregando...</h2>}
        {initialLoading && !list && !loading && <h2>Pokemon não encontrado</h2>}

        {list && !loading && <Link to={`/pokemonDetails/${list.id}`}><h2>Mais Informações</h2></Link>}
      </div>

    </div>
  )
}

export default SearchPoke

