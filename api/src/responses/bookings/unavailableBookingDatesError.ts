import { UnprocessableEntityErrorResponse } from '../unprocessableEntityError.response'

class UnavailableBookingDatesError extends UnprocessableEntityErrorResponse {
    public message: string = 'Unavalaible Booking Dates'
}

export { UnavailableBookingDatesError as UnavailableBookingDatesError }