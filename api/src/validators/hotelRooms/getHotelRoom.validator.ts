import { Validator } from '../validator'
import Joi from 'joi'

class GetHotelRoomValidator extends Validator {
    public constructor(params: object) {
        const schema = {
            id: Joi.string().required().guid({
                version: ['uuidv4'],
            })
        }

        super(schema, params);
    }
}

export { GetHotelRoomValidator as GetHotelRoomValidator }