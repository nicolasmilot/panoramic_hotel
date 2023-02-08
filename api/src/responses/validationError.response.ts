import { Validator } from '../validators/validator'

class ValidationErrorResponse {
    public readonly code: number = 422
    public message: string = 'Unprocessable entity'
    public errors: object

    public constructor(validator: Validator) {
        this.errors = validator.getErrors()
    }
}

export { ValidationErrorResponse as ValidationErrorResponse }