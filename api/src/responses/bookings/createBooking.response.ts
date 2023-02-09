import { Booking } from '../../entities/booking.entity'
import { PostResponse } from '../post.response'

class CreateBookingResponse extends PostResponse {
    public booking: Booking

    public constructor(booking: Booking) {
        super()
        this.booking = booking
    }
}

export { CreateBookingResponse as CreateBookingResponse }