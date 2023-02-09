import { Response } from 'express'
import { HotelRoom } from '../../entities/hotelRoom.entity'
import { GetHotelRoomValidator } from '../../validators/hotelRooms/getHotelRoom.validator'
import { Repository } from 'typeorm/repository/Repository'
import { GetHotelRoomPresenter } from '../../presenters/hotelRooms/getHotelRoom.presenter'

class GetHotelRoomUseCase {
    private readonly getHotelRoomValidator: GetHotelRoomValidator
    private hotelRoomRepository: Repository<HotelRoom>
    private hotelRoomPresenter: GetHotelRoomPresenter

    public constructor(getHotelRoomValidator: GetHotelRoomValidator, hotelRoomRepository: Repository<HotelRoom>, hotelRoomPresenter: GetHotelRoomPresenter) {
        this.getHotelRoomValidator = getHotelRoomValidator
        this.hotelRoomRepository = hotelRoomRepository
        this.hotelRoomPresenter = hotelRoomPresenter
    }

    public async getHotemRoom({ id }: any): Promise<Response|void> {
        if (!this.getHotelRoomValidator.validate()) {
            return this.hotelRoomPresenter.validationError(this.getHotelRoomValidator);
        }

        const hotelRoom = await this.hotelRoomRepository.findOne({
            where: { id },
            relations: ['bookings'],
        })

        if (!hotelRoom) {
            return this.hotelRoomPresenter.hotelRoomNotFound()
        }

        return this.hotelRoomPresenter.hotelRoomFound(hotelRoom)
    }
}

export { GetHotelRoomUseCase as GetHotelRoomUseCase }