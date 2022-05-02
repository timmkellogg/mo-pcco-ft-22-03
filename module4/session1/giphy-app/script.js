const gifsContainer = document.querySelector('#gifs-container');

fetch('https://api.giphy.com/v1/gifs/trending?api_key=HmEX7II3wXDKvQ7d1d10aO23CimFAj1J&limit=10')
    .then(response => response.json())
    .then(json => {
        json.data.forEach(gif => {
            const newGif = document.createElement('img');
            newGif.setAttribute('src', gif.images.fixed_width.url);

            gifsContainer.append(newGif);
        })
    })
