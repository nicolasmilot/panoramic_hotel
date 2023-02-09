import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { HotelRoom } from './hotelRoom.entity'

@Entity({ name: 'bookings' })
class Booking {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'date' })
    checkInDate: Date;

    @Column({ type: 'date' })
    checkOutDate: Date;

    @Column()
    status: string

    @Column({ nullable: true })
    numberOfPeople: number

    @ManyToOne(() => HotelRoom, (hotelRoom: HotelRoom) => hotelRoom.bookings, { cascade: true, onDelete: "SET NULL", nullable: true })
    hotelRoom: HotelRoom

    @Column({ nullable: true })
    hotelRoomName: string
}

export { Booking as Booking }