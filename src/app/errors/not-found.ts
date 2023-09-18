import { DefaultError } from "@app/errors/default.ts"

export class NotFoundError extends DefaultError {
	constructor(message?: string, details?: any) {
		super(404, "Not Found", message || "The requested resource was not found.", details)
	}
}
