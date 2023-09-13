import { DefaultError } from "./default-error.ts"

export class NotFoundError extends DefaultError {
    constructor(message: string) {
        super(404, "Not Found", message)
    }
}
