import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

import { CreateBookingValidator} from '../../validators/bookings/createBooking.validator'
import { CreateBookingPresenter } from '../../presenters/bookings/createBooking.presenter'
import { CreateBookingService } from '../../services/bookings/createBooking.service'

class CreateBookingUseCase {
    private readonly createBookingValidator: CreateBookingValidator
    private createBookingService: CreateBookingService
    private createBookingPresenter: CreateBookingPresenter

    public constructor(
        createBookingValidator: CreateBookingValidator,
        createBookingService: CreateBookingService,
        createBookingPresenter: CreateBookingPresenter
    ) {
        this.createBookingValidator = createBookingValidator
        this.createBookingService = createBookingService
        this.createBookingPresenter = createBookingPresenter
    }

    public async createBooking(params: any): Promise<any> {
        if (!this.createBookingValidator.validate()) {
            return this.createBookingPresenter.validationError(this.createBookingValidator)
        }

        const hotelRoom = await this.createBookingService.getHotelRoom(params.hotelRoomId)
        if (!hotelRoom) {
            return this.createBookingPresenter.hotelRoomNotFound()
        }

        const checkInDate = dayjs(params.checkInDate).tz('America/Toronto')
        const checkOutDate = dayjs(params.checkOutDate).tz('America/Toronto')
        if (checkOutDate.diff(checkInDate, 'day', true) > hotelRoom.maximumBookingDurationInDays) {
            return this.createBookingPresenter.invalidBookingDuration()
        }

        const overlappingBookings = await this.createBookingService.getOverlappingBookings(checkInDate, checkOutDate)
        console.log(overlappingBookings)
        if (overlappingBookings.length > 0) {
            return this.createBookingPresenter.bookingDatesUnavalaible()
        }

        return this.createBookingService.createBooking(hotelRoom, checkInDate, checkOutDate).then((booking) => {
            return this.createBookingPresenter.bookingCreated(booking)
        }).catch((error: Error) => {
            console.error(error)
            return this.createBookingPresenter.errorCreatingBooking(error)
        })
    }
}

export { CreateBookingUseCase as CreateBookingUseCase }