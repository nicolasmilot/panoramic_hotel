import express from 'express'

import { hotelRoomsRoutes } from './routes/hotelRooms.routes'

const app = express()

app.use(express.json())

app.use('/api/v1/hotel-rooms', hotelRoomsRoutes)

export { app as app }