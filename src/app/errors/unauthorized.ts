import { DefaultError } from "@app/errors/default.ts"

export class UnauthorizedError extends DefaultError {
		constructor(message?: string, details?: any) {
				super(401, "Unauthorized", message || "You are not authorized to access this resource.", details)
		}
}
