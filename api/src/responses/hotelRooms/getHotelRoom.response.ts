import { HotelRoom } from '../../entities/hotelRoom.entity'
import { GetResponse } from '../get.response'

class GetHotelRoomResponse extends GetResponse {
    public hotelRoom: HotelRoom

    public constructor(hotelRoom: HotelRoom) {
        super()
        this.hotelRoom = hotelRoom
    }
}

export { GetHotelRoomResponse as GetHotelRoomResponse }