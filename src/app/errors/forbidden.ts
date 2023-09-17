import { DefaultError } from "@app/errors/default.ts"

export class ForbiddenError extends DefaultError {
		constructor(message: string) {
				super(403, "Forbidden", message);
		}
}
