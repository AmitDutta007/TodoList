const express = require('express')
const notes = require('./data/notes')
const dotenv = require('dotenv')


const app = express()
dotenv.config()


app.get('/', (req, res) => {
    res.send('create my 1st api')
})

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
    const notesId = notes.find((n) => n._id === req.params.id)
    res.send(notesId)
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server at ${PORT} port`))