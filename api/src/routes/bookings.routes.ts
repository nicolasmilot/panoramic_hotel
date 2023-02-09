import { Request, Response, Router } from 'express'
import { CreateBookingUseCase } from '../useCases/bookings/createBooking.useCase'
import { CreateBookingValidator } from '../validators/bookings/createBooking.validator'
import { CreateBookingPresenter } from '../presenters/bookings/createBooking.presenter'
import { AppDataSource } from '../data-source'
import { Booking } from '../entities/booking.entity'
import { HotelRoom } from '../entities/hotelRoom.entity'
import { CreateBookingService } from '../services/bookings/createBooking.service'

const router = Router()

router.post('', async (req: Request, res: Response) => {
    const createBookingUseCase: CreateBookingUseCase = new CreateBookingUseCase(
        new CreateBookingValidator(req.body),
        new CreateBookingService(
            AppDataSource.getRepository(HotelRoom),
            AppDataSource.getRepository(Booking)
        ),
        new CreateBookingPresenter(res)
    )
    return createBookingUseCase.createBooking(req.body)
})

export { router as bookingsRoutes }