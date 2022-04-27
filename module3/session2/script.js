// const numbers = [1, 2, 3, 4, 5];

// setTimeout(() => {
//     console.log('run after 0ms');
// }, 0)

// numbers.forEach((num) => {
//     console.log(num)
// })

// console.log('after');

const gifsContainer = document.querySelector('#gifs-container');

fetch('https://api.giphy.com/v1/gifs/trending?api_key=YOURAPIKEYGOESHERE&limit=10')
    .then(response => response.json())
    .then(json => {
        json.data.forEach(gif => {
            const newGif = document.createElement('img');
            newGif.setAttribute('src', gif.images.fixed_width.url);

            gifsContainer.append(newGif);
        })
    })
