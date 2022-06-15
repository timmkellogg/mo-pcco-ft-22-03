import { useEffect, useState } from 'react'

import GifViewer from './GifViewer'

function GiphySearch() {
  const [input, setInput] = useState('')   
  const [gifs, setGifs] = useState([])
  const [savedGifs, setSavedGifs] = useState([])


  useEffect(() => {
    search()
  }, [])

  const search = async (event) => {
    if(event) event.preventDefault()

    let response

    if(input.trim()) {
      response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=HmEX7II3wXDKvQ7d1d10aO23CimFAj1J&limit=10`)
    } else {
      response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=HmEX7II3wXDKvQ7d1d10aO23CimFAj1J&limit=10')
    }

    const json = await response.json()
    setGifs(json.data)
  };

  const save = (gif) => {
    const newArray = [...savedGifs, gif]

    setSavedGifs(newArray)
  }

  const remove = (index) => {
    const newArray = savedGifs.filter((gif, key) => key !== index)
    
    setSavedGifs(newArray)
  }

  return (
    <div>
      <h4>Saved Gifs</h4>
      <GifViewer gifs={savedGifs} buttonAction={remove} buttonText='remove'  />

      <form onSubmit={search}>
        <input value={input} onChange={(event) => setInput(event.target.value)} />
        <button>search</button>
      </form>

      <GifViewer gifs={gifs} buttonAction={save} buttonText='save'  />
    </div>
  )
}

export default GiphySearch
