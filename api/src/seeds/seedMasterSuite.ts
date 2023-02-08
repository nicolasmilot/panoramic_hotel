import { HotelRoom } from '../entities/hotelRoom.entity'
import { AppDataSource } from '../data-source'

const hotelRoomRepository = AppDataSource.getRepository(HotelRoom)
const MasterSuiteName = 'Master Suite'

const seedMasterSuite = async () => {
    const hotelRooms = await hotelRoomRepository.findOneBy({ roomName: MasterSuiteName })

    if (hotelRooms) {
        console.log('No need to seed master suite...')
        return null
    }

    const masterSuite = new HotelRoom()

    masterSuite.roomName = MasterSuiteName
    masterSuite.maximumNumberOfPeople = 3
    masterSuite.maximumBookingDurationInDays = 3

    return hotelRoomRepository.save(masterSuite).then((createdSuite) => {
        console.log('Master suite created')
        return createdSuite
    }).catch((error: any) => {
        console.log('Error creating master suite...')
        console.error(error)
        return null
    })
}

export { seedMasterSuite as seedMasterSuite }