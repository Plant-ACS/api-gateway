import { DefaultError } from "@app/errors/default.ts"

export class BadRequestError extends DefaultError {
		constructor(message: string, details?: any) {
				super(400, "Bad Request", message, details);
		}
}
