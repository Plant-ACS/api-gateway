import { DefaultError } from "@app/errors/default.ts"

export class InternalServerError extends DefaultError {
		constructor(message: string, details?: any) {
				super(500, "Internal Server Error", message, details);
		}
}
