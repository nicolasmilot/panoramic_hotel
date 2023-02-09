import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Booking } from "./booking.entity";

@Entity({ name: 'hotel_rooms' })
class HotelRoom {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    roomName: string

    @Column()
    maximumNumberOfPeople: number

    @Column()
    maximumBookingDurationInDays: number

    @OneToMany(() => Booking, (booking: Booking) => booking.hotelRoom)
    bookings: Booking[]
}

export { HotelRoom as HotelRoom }