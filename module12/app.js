import express from 'express' 
import path from 'path'
import authRouter from './routes/auth.js'
import gifRouter from './routes/gifs.js'
import authenticateJWT from './middleware/authenticateJWT.js'

const app = express()
const port = process.env.PORT || 3000

//using middleware
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authRouter)
app.use('/api/gifs', authenticateJWT, gifRouter)

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