import { ValidationErrorResponse } from '../validationError.response'
import { Validator } from '../../validators/validator'

class CreateBookingValidationErrorResponse extends ValidationErrorResponse {
    public constructor(validator: Validator) {
        super(validator)
    }
}

export { CreateBookingValidationErrorResponse as CreateBookingValidationErrorResponse }