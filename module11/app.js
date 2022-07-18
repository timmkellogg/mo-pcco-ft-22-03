const express = require('express')

const app = express()
const port = 3000 

//using middleware
app.use(express.urlencoded({ extended: false }))

const db = {
    gifs: [{
        url: 'someurl',
    },
    {
        url: 'someurlidk',
    }],
    users: [
        {
            username: 'tim',
            password: 'redacted'
        }
    ]
}

//defining an endpoint
app.get('/api/gifs', (req, res) => {

    res.json(db.gifs)
})

app.post('/api/gifs', (req, res) => {
    console.log(req.body)
    //db.gifs.push('')

    res.send('post successful')
})


//default route
app.get('*', (req, res) => {
    //sends react app
    res.send('<html><body><h1>React app will go here</></body></html>')
})

// STARTS EXPRESS ERVER
// USE CTRL + C TO STOP SERVER
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})