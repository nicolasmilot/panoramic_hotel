import { Response } from 'express'
import { CreateBookingValidator } from '../../validators/bookings/createBooking.validator'
import { CreateBookingValidationErrorResponse } from '../../responses/bookings/createBookingValidationError.response'
import { HotelRoomNotFoundResponse } from '../../responses/hotelRooms/hotelRoomNotFound.response'
import { InvalidBookingDurationErrorResponse } from '../../responses/bookings/invalidBookingDurationError.response'
import { UnavailableBookingDatesError } from '../../responses/bookings/unavailableBookingDatesError'
import { GeneralErrorResponse } from '../../responses/generalError.response'
import { CreateBookingResponse } from '../../responses/bookings/createBooking.response'
import { Booking } from '../../entities/booking.entity'

class CreateBookingPresenter {
    private res: Response

    public constructor(res: Response) {
        this.res = res
    }

    public validationError(validator: CreateBookingValidator): Response {
        const response = new CreateBookingValidationErrorResponse(validator)
        return this.res.status(response.code).send(response)
    }

    public hotelRoomNotFound(): Response {
        const response = new HotelRoomNotFoundResponse()
        return this.res.status(response.code).send(response);
    }

    public invalidBookingDuration(): Response {
        const response = new InvalidBookingDurationErrorResponse()
        return this.res.status(response.code).send(response);
    }

    public bookingDatesUnavalaible(): Response {
        const response = new UnavailableBookingDatesError()
        return this.res.status(response.code).send(response);
    }

    public errorCreatingBooking(error: Error): Response {
        const response = new GeneralErrorResponse(error)
        return this.res.status(response.code).send(response);
    }

    public bookingCreated(booking: Booking): Response {
        const response = new CreateBookingResponse(booking)
        return this.res.status(response.code).send(response)
    }
}

export { CreateBookingPresenter as CreateBookingPresenter }