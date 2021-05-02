import express, { Router } from 'express'
import { getTest, postTest, addRoom, getRooms }  from '../controllers/roomControllers.js'
import { catchErrors } from './../helpers.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('hello')
})

router.get('/test', getTest)

router.post('/test', postTest)

router.post('/room', catchErrors(addRoom))

router.get('/rooms', catchErrors(getRooms))

export default router