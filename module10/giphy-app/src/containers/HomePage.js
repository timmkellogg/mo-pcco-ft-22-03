import { useState, useEffect } from 'react'

import GifViewer from '../components/GifViewer'

function HomePage() {
    const [gifs, setGifs] = useState([])
    useEffect(() => {
        getTrending()
    }, [])

    const getTrending = async () => {
        const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=APIKEYGOESHERE&limit=10`)
        const json = await response.json()

        setGifs(json.data)
    }

    return (
        <div>
            <h4>Home Page</h4>
            <GifViewer gifs={gifs} />
        </div>
    )
}

export default HomePage