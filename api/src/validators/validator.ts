import Joi from 'joi'

class Validator {
    private readonly params: object
    private schema: object
    private errors: object = {}

    public constructor(schema: object, params: object) {
        this.schema = schema
        this.params = params
    }

    public validate(): boolean {
        const { error } = Joi.object(this.schema)
            .options({abortEarly: false})
            .validate(this.params)

        if (!error) {
            return true
        }

        this.addErrors(error.details)
        return false
    }

    private addErrors(errors: Array<any>) {
        for (const error of errors) {
            const [path] = error.path
            this.addErrorForAField(path, error.type)
        }
    }

    private addErrorForAField(field: string, error: string): void
    {
        this.errors = {
            ...this.errors,
            [field]: error,
        }
    }

    public getErrors(): object {
        return this.errors
    }
}

export { Validator as Validator }