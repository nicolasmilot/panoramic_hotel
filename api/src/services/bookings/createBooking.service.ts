import { Repository } from 'typeorm/repository/Repository'
import { HotelRoom } from '../../entities/hotelRoom.entity'
import { Booking } from '../../entities/booking.entity'
import { Between, Not } from 'typeorm'

class CreateBookingService {
    private hotelRoomRepository: Repository<HotelRoom>
    private bookingRepository: Repository<Booking>

    public constructor(
        hotelRoomRepository: Repository<HotelRoom>,
        bookingRepository: Repository<Booking>,
    ) {
        this.hotelRoomRepository = hotelRoomRepository
        this.bookingRepository = bookingRepository
    }

    public async getHotelRoom(hotelRoomId: string): Promise<HotelRoom|null> {
        return this.hotelRoomRepository.findOne({
            where: { id: hotelRoomId }
        })
    }

    public async getOverlappingBookings(checkInDate: any, checkOutDate: any): Promise<Booking[]> {
        /**
         * TODO: Switch where clause for this one: WHERE (
         *     (checkInDate <= '2023-02-13' AND checkOutDate > '2023-02-13') OR
         *     (checkInDate < '2023-02-16' AND checkOutDate >= '2023-02-16')
         * ) and add status
         */
        const between = Between(
            checkInDate.format('YYYY-MM-DD'),
            checkOutDate.format('YYYY-MM-DD')
        )
        return this.bookingRepository.find({
            where: [
                {
                    checkInDate: between,
                    status: Not('CANCELED')
                },
                {
                    checkOutDate: between,
                    status: Not('CANCELED')
                },
            ]
        })
    }

    public async createBooking(hotelRoom: HotelRoom, checkInDate: any, checkOutDate: any): Promise<Booking> {
        const booking = new Booking()
        booking.checkInDate = checkInDate.format('YYYY-MM-DD')
        booking.checkOutDate = checkOutDate.format('YYYY-MM-DD')
        booking.status = 'CREATED'
        booking.hotelRoom = hotelRoom
        booking.hotelRoomName = hotelRoom.roomName
        return this.bookingRepository.save(booking)
    }
}

export { CreateBookingService as CreateBookingService }
