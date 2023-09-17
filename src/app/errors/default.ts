export class DefaultError extends Error {
	constructor(
		public readonly statusCode: number,
		public readonly error: string,
		public readonly message: string,
		public readonly details?: any
	) {
		super(message)
	}
}
