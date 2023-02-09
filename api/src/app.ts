import express from 'express'

import { hotelRoomsRoutes } from './routes/hotelRooms.routes'
import { bookingsRoutes } from './routes/bookings.routes'

const app = express()

app.use(express.json())

app.use('/api/v1/hotel-rooms', hotelRoomsRoutes)
app.use('/api/v1/bookings', bookingsRoutes)

export { app as app }