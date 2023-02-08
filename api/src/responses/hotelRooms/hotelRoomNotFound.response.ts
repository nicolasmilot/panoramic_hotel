import { NotFoundResponse } from '../notFound.response'

class HotelRoomNotFoundResponse extends NotFoundResponse {
    public message: string = 'Hotel Room Not Found'
}

export { HotelRoomNotFoundResponse as HotelRoomNotFoundResponse }