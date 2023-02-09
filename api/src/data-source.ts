import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { HotelRoom } from './entities/hotelRoom.entity'
import { Booking } from './entities/booking.entity'

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: process.env.DATABASE || 'app.sql',
    synchronize: true,
    logging: true,
    entities: [HotelRoom, Booking],
    subscribers: [],
    migrations: [],
})