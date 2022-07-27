import express from 'express'
import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'
import { v4 as uuidv4 } from 'uuid'

const __dirname = dirname(fileURLToPath(import.meta.url));

const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

await db.read()

db.data = db.data || { gifs: [] }

const router = express.Router()

//READ
router.get('/', (req, res) => {
    res.json(db.data.gifs)
})

//CREATE
router.post('/', (req, res) => {
    console.log(req.body)
    db.data.gifs.push({ id: uuidv4(), url: req.body.url })

    db.write()

    res.send('post successful')
})

//UPDATE
router.put('/:id', (req, res) => {
    const itemToUpdate = db.data.gifs.find((gif) => gif.id === req.params.id)

    itemToUpdate.url = req.body.url

    db.write()

    res.send('update successful')
})

//DELETE
router.delete('/:id', (req, res) => {
    
    db.data.gifs = db.data.gifs.filter(gif => gif.id !== req.params.id)

    db.write()

    res.send('delete successful')
})

export default router