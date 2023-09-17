import { IConvert } from "@app/ports/presentation/convert.ts"
import { BadRequestError } from "@app/errors/mod.ts"

export class StringToNumber implements IConvert {
	handle(value: any): number {
		if (typeof value !== "string")
			throw new BadRequestError("The value must be a string.")
		try { return Number(value) }
		catch { throw new BadRequestError("The value must be a number.") }
	}
}
