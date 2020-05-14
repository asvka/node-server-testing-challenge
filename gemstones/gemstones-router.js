const express = require('express')
const Gemstones = require('./gemstones-model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const data = await Gemstones.get()
        res.json(data)
    }
    catch (err){
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const data = await Gemstones.add(req.body)
        res.status(201).json(data)
    }
    catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        await Gemstones.remove(req.params.id)
        res.status(204).end()
    }
    catch (err) {
        next(err)
    }
})
module.exports = router;