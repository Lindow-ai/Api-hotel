import RoomModel from '../models/roomModel.js'

export const getTest = (req, res) => {
    res.send({
        name: 'test'
    })
}

export const postTest =  (req, res) => {
    res.send(req.body)
}

export const addRoom = async (req, res) => {
    const room = new RoomModel(req.body)
        await room.save()
        res.send(room)
}

// Read All

export const getRooms = async (req, res) => {
    const rooms = await RoomModel.find({})
    res.send(rooms)
}

// Read One 

export const getRoom = async (req, res) => {
    const room = await RoomModel.find({_id: req.params.id })
    res.send(room)
}

// Update 

export const updateRoom = async (req, res) => {
    const room = await RoomModel.findByIdAndUpdate(req.params.id, req.body)
    await room.save()
    res.send(room)
}



