import express, { Router } from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.send("Hello")
})

router.get('/test', (req, res) => {
    res.send({
        name: 'test'
    })
})

router.post('/test', (req, res) => {
    console.log(req)
    res.send(req.body)
})

export default router