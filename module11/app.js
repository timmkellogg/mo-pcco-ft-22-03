import express from 'express' 
import path from 'path'
import gifRouter from './routes/gifs.js'

const app = express()
const port = 3000 

//using middleware
app.use(express.urlencoded({ extended: true }))

app.use('/api/gifs', gifRouter)

//default route
app.get('*', (req, res) => {
    //sends react app
    res.sendFile(path.resolve() + '/index.html')
})

// STARTS EXPRESS SERVER
// USE CTRL + C TO STOP SERVER
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})