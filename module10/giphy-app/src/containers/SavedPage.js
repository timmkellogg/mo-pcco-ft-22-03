import { useState, useEffect } from 'react'
import GifViewer from '../components/GifViewer'

function SavedPage() {
    const [gifs, setGifs] = useState([])
    useEffect(() => {
        let savedGifs = JSON.parse(localStorage.getItem('savedGifs'))

        if (!savedGifs) savedGifs = [];

        setGifs(savedGifs)
    }, [])

    const remove = (index) => {
        const newArray = gifs.filter((gif, key) => key !== index)
    
        setGifs(newArray);
        localStorage.setItem('savedGifs', JSON.stringify(newArray))
    }

    return (
        <div>
            <GifViewer gifs={gifs} buttonAction={remove} buttonText='remove' />
        </div>
    )
}

export default SavedPage