import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
class HotelRoom {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    roomName: string

    @Column()
    maximumNumberOfPeople: number

    @Column()
    maximumBookingDurationInDays: number
}

export { HotelRoom as HotelRoom }