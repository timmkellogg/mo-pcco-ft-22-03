import express from 'express'
import jwt from 'jsonwebtoken'

const router = express.Router()

const accessTokenSecret = 'somerandomaccesstoken'

const users = [{ id: 0, username: 'tim', password: 'timpass' }]

//READ
router.post('/login', (req, res) => {
    const { username, password } = req.body

    const user = users.find(user => user.username === username && user.password === password)
    
    if(user) {
       const accessToken = jwt.sign(
        { username: user.username, id: user.id }, //token payload
        accessTokenSecret, // secret used to sign token
        { expiresIn: '120m' } //details
       )

       res.json(accessToken)
    } else {
        res.send('username or password invalid')
    }
})

//CREATE
router.post('/signup', (req, res) => {
    console.log(req.body)

    res.send('post successful')
})


export default router