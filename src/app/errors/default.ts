import { IResponse } from "@app/ports/presentation/mod.ts"

export class DefaultError extends Error {
	constructor(
		public readonly statusCode: number,
		public readonly error: string,
		public readonly message: string,
		public readonly details?: any
	) {
		super(message)
	}

	send(): IResponse {
		return {
			statusCode: this.statusCode,
			body: {
				error: this.error,
				message: this.message,
				details: this.details
			}
		}
	}
}
