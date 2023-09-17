import { IConvert } from "@app/ports/presentation/convert.ts"

export class StringToBoolean implements IConvert {
	handle(value: any): boolean {
		if (typeof value !== "string")
			throw new Error("The value must be a string.")

		if (value === "true") return true
		if (value === "false") return false

		throw new Error("The value must be a boolean.")
	}
}
