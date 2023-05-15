
import { useState, useEffect } from 'react';
import FirstImage from '../FirtsImage';
import './Cover.css'

const Cover = () => {

  const [getPokemons, setGetPokemons] = useState(null)
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [tester, setTest] = useState(51)
  const [checkNext, setCheckNext] = useState(0)

  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/?&limit=${tester}`)

  useEffect(() => {
    const getMore = () => {
      fetch(url)
        .then((resp) => resp.json())
        .then(data => {
          setGetPokemons(data.results)
          setNextUrl(data.next)
          setPrevUrl(data.previous)
        })
    }
    getMore()
  }, [url])
 
  getPokemons && checkNext === 2 && getPokemons.pop()

  return (
    <div>
     <div className='background'>
        {getPokemons && getPokemons.map((item, index) => 
        <FirstImage
          key={index}
          data={item}
        />)}
      </div>

      <div className='forPreviousAndNext'>

        {prevUrl && <button className='fowardBack' onClick={() => {
          setCheckNext(checkNext - 1)
          setGetPokemons([])
          setUrl(prevUrl)
        }}>Previous</button>}

        {nextUrl && checkNext < 2 && <button className='fowardBack' onClick={() => {
          setCheckNext(checkNext + 1)
          setGetPokemons([])
          setUrl(nextUrl)
        }}>Next</button>}
      </div>
    </div>
  )
}

export default Cover