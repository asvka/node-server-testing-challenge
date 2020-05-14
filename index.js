const express = require('express')
const cors = require('cors')
const gemstonesRouter = require('./gemstones/gemstones-router')

const server = express()
const port = process.env.PORT || 7777

server.use(cors())
server.use(express.json())

server.use('/gemstones', gemstonesRouter)
server.get('/', (req, res) => {
    res.json({
        message: "Welcome!"
    })
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Error detected."
    })
})

if (!module.parent) {
    server.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`)
    })
}
module.exports = server;