import { Request, Response, Router } from 'express'
import { GetHotelRoomUseCase } from '../useCases/hotelRooms/getHotelRoom.useCase'
import { AppDataSource } from '../data-source'
import { HotelRoom } from '../entities/hotelRoom.entity'
import { GetHotelRoomPresenter } from '../presenters/hotelRooms/getHotelRoom.presenter'
import { GetHotelRoomValidator } from '../validators/hotelRooms/getHotelRoom.validator'


const router = Router()

router.get('', async (req: Request, res: Response) => {
    return res.status(200).send('Allo')
})

router.get('/:id', async (req: Request, res: Response) => {
    const getHotelRoomUseCase = new GetHotelRoomUseCase(
        new GetHotelRoomValidator(req.params),
        AppDataSource.getRepository(HotelRoom),
        new GetHotelRoomPresenter(res)
    )
    console.log(req)
    return getHotelRoomUseCase.getHotemRoom(req.params)
})

export { router as hotelRoomsRoutes }