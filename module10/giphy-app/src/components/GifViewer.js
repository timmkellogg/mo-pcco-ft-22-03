function GifViewer({ gifs, buttonAction, buttonText }) {

    return (
        <div id='gifs-container'>
            {gifs.map((gif, key) => {
                return (
                    <div key={key} className='img-container'>
                        <img alt="gif" src={gif.images.original.url} />

                        {buttonAction && 
                            <button onClick={() => buttonAction(buttonText === 'save' ? gif : key)}>{buttonText}</button>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default GifViewer