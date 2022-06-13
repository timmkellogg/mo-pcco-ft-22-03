import { useEffect, useState } from 'react';

import GifViewer from './GifViewer'

function GiphySearch() {
  const [input, setInput] = useState('');
  const [gifs, setGifs] = useState([]);


  useEffect(() => {
    search()
  }, [])

  const search = async (event) => {
    if(event) event.preventDefault();

    let response;

    if(input) {
      response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=APIKEYGOESHERE&limit=10`)
    } else {
      response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=APIKEYGOESHERE&limit=10')
    }

    const json = await response.json()
    setGifs(json.data)
  };

  return (
    <div>
      <form onSubmit={search}>
        <input value={input} onChange={(event) => setInput(event.target.value)} />
        <button>search</button>
      </form>

      <GifViewer gifs={gifs} makeSomethingUp='some string I guess' />
    </div>
  );
}

export default GiphySearch;
