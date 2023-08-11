const http = require('http')
const path = require('path')
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
require('dotenv').config();

const { query, get, add } = require('./services/url.service.js')

const app = express()
const server = http.createServer(app)

// Express App Config
app.use(express.json())
    const corsOptions = {
        origin: [ 'http://127.0.0.1:3000', 'http://localhost:3000' ],
        credentials: true
    }
    app.use(cors(corsOptions))

app.use(morgan());

app.post('/api', async (req, res, next) => {
    try {
        const { url } = req.body
        const savedURLs = await add(url)
        res.send(savedURLs)
    } catch (err) {
        next(err)
    }
})

app.get('/api', async (req, res, next) => {
    try {
        const { url } = req.query
        if (url) {
            const URLs = await get(url)
            res.send(URLs)
        } else {
            const URLs = await query()
            res.send(URLs)
        }
    } catch (err) {
        next(err)
    }
});


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`)
})
