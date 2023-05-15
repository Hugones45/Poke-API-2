import "./PokemoInitialCard.css"
import { useState, useEffect } from "react"
import ReactLoading from 'react-loading'

const PokemonsInitialCard = ({
    types,
    data,
    namePokemon,
    numberPokemon,
    image,
    pokemonTypes,
    details,
    vintage,
}) => {

    const [pokeImage, setPokeImage] = useState(null)
    const [vintImage, setVintImage] = useState()
    const [loading, setLoading] = useState(false)

    const [colorTypes, setColorTypes] = useState([
        {
            name: 'grass',
            colorType: '#98d7a5'
        },
        {
            name: 'poison',
            colorType: '#DDA0DD'
        },
        {
            name: 'normal',
            colorType: '#FFEBCD'
        },
        {
            name: 'fighting',
            colorType: '#FF6347'
        },
        {
            name: 'flying',
            colorType: '#F5F5F5'
        },
        {
            name: 'ground',
            colorType: '#f8d5a3'
        },
        {
            name: 'rock',
            colorType: '#d5d5d4'
        },
        {
            name: 'bug',
            colorType: '#DEFDE0'
        },
        {
            name: 'ghost',
            colorType: '#663399'
        },
        {
            name: 'steel',
            colorType: '#f4f4f4'
        },
        {
            name: 'fire',
            colorType: '#FDDFDF'
        },
        {
            name: 'water',
            colorType: '#DEF3FD'
        },
        {
            name: 'electric',
            colorType: '#FCF7DE'
        },
        {
            name: 'psychic',
            colorType: '#EE82EE'
        },
        {
            name: 'ice',
            colorType: '#87CEEB'
        },
        {
            name: 'dragon',
            colorType: '#97b3e6'
        },
        {
            name: 'dark',
            colorType: '#8B4513'
        },
        {
            name: 'fairy',
            colorType: '#FFC0CB'
        }
    ])

    const dataPokemons = async () => {
        setLoading(true)
        const res = await fetch(data)
        const json = await res.json()

        setPokeImage(json)
        setVintImage(json?.sprites.versions["generation-v"]["black-white"].animated.front_default)
   setLoading(false)
    }
    useEffect(() => {
        dataPokemons()
    }, [])

    const alterarBackground = (typeColor) => {
        const aletredColor = colorTypes && colorTypes.find((item) => item.name === typeColor)['colorType']
        return aletredColor
    }
    const type = types && types[0].type.name
    return (
        <div className="card" style={{ backgroundColor: type && alterarBackground(type) }}>
            <div className="itens">
                <div>
                    <h2>{numberPokemon} - {namePokemon}</h2>
            {loading && <p>Carregando...</p>}
            {!loading && <p className="whiteBack">{image}</p>}

                    <div className="pokemonTypes">{pokemonTypes}</div>

                    <h2 className="details">{details}</h2>

                    <>{vintage}</>
                </div>
            </div>
        </div>

    )
}

export default PokemonsInitialCard