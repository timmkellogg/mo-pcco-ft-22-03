import { useState } from 'react'
import GifViewer from '../components/GifViewer'

function SearchPage() {
    const [input, setInput] = useState('')
    const [gifs, setGifs] = useState([])

    const search = async (event) => {
        if(event) event.preventDefault()

        const response = await fetch(`https://api.giphy.com/v1/gifs/search?&api_key=APIKEYGOESHERE&limit=10&q=${input}`)
        const json = await response.json()

        setGifs(json.data)
    }

    const save = (gif) => {
        let savedGifs = JSON.parse(localStorage.getItem('savedGifs'))
        
        if (!savedGifs) savedGifs = [];

        console.log(savedGifs)

        localStorage.setItem('savedGifs', JSON.stringify([...savedGifs, gif]))
    }

    return (
        <div>
            <form onSubmit={search}>
                <input value={input} onChange={(event) => setInput(event.target.value)} />
                <button>search</button>
            </form>

            <GifViewer gifs={gifs} buttonAction={save} buttonText='save' />
        </div>
    )
}

export default SearchPage