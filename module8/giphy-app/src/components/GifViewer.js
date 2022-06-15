function GifViewer({ gifs }) {

    return (
        <div>
            {gifs.map((gif, key) => {
                return (
                    <div key={key}>
                        <img src={gif.images.original.url} />
                    </div>
                )
            })}
        </div>
    )
}

export default GifViewer