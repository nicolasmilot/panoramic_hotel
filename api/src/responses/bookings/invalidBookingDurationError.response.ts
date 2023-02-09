import { UnprocessableEntityErrorResponse } from '../unprocessableEntityError.response'

class InvalidBookingDurationErrorResponse extends UnprocessableEntityErrorResponse {
    public message: string = 'Invalid Booking Duration'
}

export { InvalidBookingDurationErrorResponse as InvalidBookingDurationErrorResponse }