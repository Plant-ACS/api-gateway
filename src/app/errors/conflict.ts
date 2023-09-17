import { DefaultError } from "./default.ts";

export class ConflictError extends DefaultError {
	constructor(message: string, details?: any){
		super(409, "Conflict", message, details)
	}
}
