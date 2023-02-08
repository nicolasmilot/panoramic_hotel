import { Response} from 'express'
import { HotelRoom } from '../../entities/hotelRoom.entity'
import { HotelRoomNotFoundResponse } from '../../responses/hotelRooms/hotelRoomNotFound.response'
import { GetHotelRoomResponse } from '../../responses/hotelRooms/getHotelRoom.response'
import { GetHotelRoomValidator } from '../../validators/hotelRooms/getHotelRoom.validator'
import { HotelRoomValidationErrorResponse } from '../../responses/hotelRooms/hotelRoomValidationError.response'

class GetHotelRoomPresenter {
    private res: Response
    public constructor(res: Response) {
        this.res = res
    }

    public validationError(validator: GetHotelRoomValidator) {
        const response = new HotelRoomValidationErrorResponse(validator)
        this.res.status(response.code).send(response)
    }

    public hotelRoomNotFound() {
        const response = new HotelRoomNotFoundResponse()
        this.res.status(response.code).send(response);
    }

    public hotelRoomFound(hotelRoom: HotelRoom) {
        const response = new GetHotelRoomResponse(hotelRoom)
        this.res.status(response.code).send(response)
    }
}

export { GetHotelRoomPresenter as GetHotelRoomPresenter }