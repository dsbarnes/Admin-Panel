const express = require('express')
const fs = require('fs')
const cors = require('cors')

// This is the only thing the admin pannel does:
// manipulate this JSON object
const data = require('../data/articles.json')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send(data)
})

app.post('/', (req, res) => {
    const path = '../data/articles_new.json'
    fs.writeFileSync(path, JSON.stringify(req.body, null, 2))
})


app.listen(4000)
