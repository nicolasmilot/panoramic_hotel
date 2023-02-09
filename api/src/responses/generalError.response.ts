class GeneralErrorResponse {
    public code: number = 500
    public message: string = 'General Error'

    public constructor(error: Error) {
        if (error.message) {
            this.message = error.message
        }
    }
}

export { GeneralErrorResponse as GeneralErrorResponse }