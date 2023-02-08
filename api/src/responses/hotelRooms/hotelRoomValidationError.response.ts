import { ValidationErrorResponse } from '../validationError.response'
import { Validator } from '../../validators/validator'

class HotelRoomValidationErrorResponse extends ValidationErrorResponse {
    public constructor(validator: Validator) {
        super(validator)
    }
}

export { HotelRoomValidationErrorResponse as HotelRoomValidationErrorResponse }