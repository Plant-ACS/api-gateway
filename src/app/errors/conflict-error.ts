import { DefaultError } from "./default-error.ts";

export class ConflictError extends DefaultError {
	constructor(message: string){
		super(409, "Conflict", message)
	}
}
