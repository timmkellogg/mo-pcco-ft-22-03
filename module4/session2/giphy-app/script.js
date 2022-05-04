const gifsContainer = document.querySelector('#gifs-container');
const input = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');

// searchBtn.addEventListener('click', () => {
//     console.log('!')
// })

searchBtn.onclick = () => {
    if(!input.value.trim()) return;

    //remove current gifs from gifsContainer
    gifsContainer.innerHTML = '';
    
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=APIKEYGOESHERE&q=${input.value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.data); //gifs
        data.data.forEach(gif => {
            const newGif = document.createElement('img');
            newGif.setAttribute('src', gif.images.original.url);
            newGif.setAttribute('class', 'gif-container');

            gifsContainer.append(newGif);
        })
    })
}   

// fetch('https://api.giphy.com/v1/gifs/search?api_key=APIKEYGOESHERE&q=star wars')
//     .then(response => response.json())
    // .then(json => {
    //     json.data.forEach(gif => {
    //         const newGif = document.createElement('img');
    //         newGif.setAttribute('src', gif.images.fixed_width.url);

    //         gifsContainer.append(newGif);
    //     })
//     })
