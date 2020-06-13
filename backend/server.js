const express = require('express')
const mongoose = require('mongoose') 

const app = express()

mongoose.connect('mongodb://localhost:27017/jsHunt', { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/', (req, res) => {
    return res.send('Olá')
})

app.listen(3000)