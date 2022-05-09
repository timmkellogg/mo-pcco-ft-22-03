const gifsContainer = document.querySelector('#gifs-container');
const input = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');  

searchBtn.onclick = fetchGifs;

async function fetchGifs() {
    if(!input.value.trim()) return;

    //remove current gifs from gifsContainer
    gifsContainer.innerHTML = '';

    let res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=APIKEYGOESHERE&q=${input.value}`);
    let json = await res.json();
    console.log(json);
    renderGifs(json.data) //pass gifs array
}

function renderGifs(gifs) {
    gifs.forEach(gif => {
        const newGif = document.createElement('img');
        newGif.setAttribute('src', gif.images.original.url);
        newGif.setAttribute('alt-src', gif.images.original_still.url);
        newGif.setAttribute('class', 'gif-container');

        newGif.onclick = () => {
            const currentURL = newGif.getAttribute('src');
            const altURL = newGif.getAttribute('alt-src');

            newGif.setAttribute('src', altURL);
            newGif.setAttribute('alt-src', currentURL);
        }

        gifsContainer.append(newGif);
    })
}
