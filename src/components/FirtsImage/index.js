import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./FirstImage.css"
import PokemonsInitialCard from "../../PokemonsInitialCard"

const FirstImage = ({ data }) => {

    const [pokeImage, setPokeImage] = useState(null)
    const [vintImage, setVintImage] = useState()
    const [buttonText, setButtonText] = useState('Vintage')

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

    useEffect(() => {
        const dataPokemons = async () => {
            const res = await fetch(data.url)
            const json = await res.json()

            setPokeImage(json)
            setVintImage(json?.sprites.versions["generation-v"]["black-white"].animated.front_default)
        }
        dataPokemons()
    }, [])

    const alterarimage = () => {
        setVintImage(vintImage === pokeImage?.sprites.versions["generation-i"]["yellow"].front_default ?
            pokeImage?.sprites.versions["generation-v"]["black-white"].animated.front_default : pokeImage?.sprites.versions["generation-i"]["yellow"].front_default)

        if (buttonText === "Vintage") {
            setButtonText('Sprite Atual')
        } else {
            setButtonText("Vintage")
        }
    }

    return (
        <div className="separeteCards">
         <PokemonsInitialCard
                types={pokeImage?.types}
                data={data.url}
                numberPokemon={pokeImage && pokeImage.id}
                namePokemon={pokeImage && `${pokeImage.name[0].toUpperCase()}${pokeImage.name.slice(1,)}`}
                image={<img className="imagetype" src={pokeImage && vintImage} alt={pokeImage && pokeImage.name} />}
           
                pokemonTypes={pokeImage && pokeImage.types.map((item, index) => {
                    const color = colorTypes.find((cor) =>
                        cor.name === item.type?.name)["colorType"]
                    return (<p
                        className="Poke"
                        style={{ background: color }}
                        key={index}>{item.type.name}</p>)
                })}

                details={pokeImage && <Link className="informaçõesHover" to={`/pokemonDetails/${pokeImage.id}`}>Mais Informações</Link>}
                vintage={<input type="submit"
                    className="theButtons"
                    value={buttonText}
                    onClick={() => alterarimage()}
                />}
            />
        </div>
    )
}

export default FirstImage


















// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import "./FirstImage.css"
// import PokemonsInitialCard from "../../PokemonsInitialCard"

// const FirstImage = ({ data }) => {

//     const [pokeImage, setPokeImage] = useState(null)
//     const [vintImage, setVintImage] = useState()
//     const [buttonText, setButtonText] = useState('Vintage')

//     const [colorTypes, setColorTypes] = useState([
//         {
//             name: 'grass',
//             colorType: 'green'
//         },
//         {
//             name: 'poison',
//             colorType: 'purple'
//         },
//         {
//             name: 'normal',
//             colorType: '#f8d5a3'
//         },
//         {
//             name: 'fighting',
//             colorType: '#DC143C'
//         },
//         {
//             name: 'flying',
//             colorType: '#9370DB'
//         },
//         {
//             name: 'ground',
//             colorType: '#F4A460'
//         },
//         {
//             name: 'rock',
//             colorType: '#DEB887'
//         },
//         {
//             name: 'bug',
//             colorType: '#9ACD32'
//         },
//         {
//             name: 'ghost',
//             colorType: '#4B0082'
//         },
//         {
//             name: 'steel',
//             colorType: '#DCDCDC'
//         },
//         {
//             name: 'fire',
//             colorType: '#FF4500'
//         },
//         {
//             name: 'water',
//             colorType: '#1E90FF'
//         },
//         {
//             name: 'electric',
//             colorType: '#FFD700'
//         },
//         {
//             name: 'psychic',
//             colorType: '#FF00FF'
//         },
//         {
//             name: 'ice',
//             colorType: '#AFEEEE'
//         },
//         {
//             name: 'dragon',
//             colorType: '#7B68EE'
//         },
//         {
//             name: 'dark',
//             colorType: '#8B4513'
//         },
//         {
//             name: 'fairy',
//             colorType: '#FF69B4'
//         }
//     ])

//     useEffect(() => {
//         const dataPokemons = async () => {
//             const res = await fetch(data.url)
//             const json = await res.json()

//             setPokeImage(json)
//             setVintImage(json?.sprites.versions["generation-v"]["black-white"].animated.front_default)
//         }
//         dataPokemons()
//     }, [])

//     const alterarimage = () => {
//         setVintImage(vintImage === pokeImage?.sprites.versions["generation-i"]["yellow"].front_default ?
//             pokeImage?.sprites.versions["generation-v"]["black-white"].animated.front_default : pokeImage?.sprites.versions["generation-i"]["yellow"].front_default)

//         if (buttonText === "Vintage") {
//             setButtonText('Sprite Atual')
//         } else {
//             setButtonText("Vintage")
//         }
//     }

//     return (
//         <div className="separeteCards">
//             <PokemonsInitialCard
//             types={pokeImage?.types}
//             data={data.url}
//                 numberPokemon={pokeImage && pokeImage.id}
//                 namePokemon={pokeImage && `${pokeImage.name[0].toUpperCase()}${pokeImage.name.slice(1,)}`}

//                 image={<img className="imagetype" src={pokeImage && vintImage} alt={pokeImage && pokeImage.name} />}

//                 pokemonTypes={pokeImage && pokeImage.types.map((item, index) => {
//                     const color = colorTypes.find((cor) =>
//                         cor.name === item.type?.name)["colorType"]
//                     return (<p
//                     className="Poke"
//                         style={{ background: color}}
//                         key={index}>{item.type.name}</p>)
//                 })}

//                 details={pokeImage && <Link to={`/pokemonDetails/${pokeImage.id}`}>Mais Informações</Link>}

//                 vintage={<input type="submit"
//                     value={buttonText}
//                     onClick={() => alterarimage()}
//                 />}
//             />
//         </div>
//     )
// }

// export default FirstImage
