class BadRequestError extends Error {
    constructor(message){
        super(message)
        this.name = "BadRequestError",
        this.statusCode = 400
    }
}

class NotFoundError extends Error {
    constructor(message){
        super(message)
        this.name = "NotFoundError"
        this.statusCode = 404
    }
}


class UserAlradyExist extends Error {
    constructor(message){
        super(message)
        this.name = "UserAlradyExist"
        this.statusCode = 402
    }
}

// return next(new BadRequestError('Invalid resource ID'));