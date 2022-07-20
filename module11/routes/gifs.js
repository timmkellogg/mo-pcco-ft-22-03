import express from 'express'
import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));

const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

await db.read()

db.data = db.data || { gifs: [] }

const router = express.Router()

//READ
router.get('/fasjfodafgsapfhafhashif', (req, res) => {
    res.json(db.data.gifs)
})

//CREATE
router.post('/', (req, res) => {
    console.log(req.body)
    db.data.gifs.push({ url: req.body.url })

    db.write()

    res.send('post successful')
})

//UPDATE
router.put('/', (req, res) => {
    console.log(req.body)
    //db.gifs.push('')

    res.send('post successful')
})

//DELETE
router.delete('/', (req, res) => {
    console.log(req.body)
    //db.gifs.push('')

    res.send('post successful')
})

export default router