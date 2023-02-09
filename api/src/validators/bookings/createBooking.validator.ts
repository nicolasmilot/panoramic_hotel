import { Validator } from '../validator'
import dayjs from 'dayjs';
import Joi from "joi";

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

class CreateBookingValidator extends Validator {
    public constructor(params: object) {
        const today = dayjs().tz('America/Toronto')
        const tomorrow = today.add(1, 'd')

        const schema = {
            hotelRoomId: Joi.string().required().guid({
                version: ['uuidv4'],
            }),
            checkInDate: Joi.date().min(today.format('YYYY-MM-DD')).required(),
            checkOutDate: Joi.date().min(tomorrow.format('YYYY-MM-DD')).required(),
        }

        super(schema, params)
    }
}

export { CreateBookingValidator as CreateBookingValidator }