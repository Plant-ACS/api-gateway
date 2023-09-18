import { IConvert } from "@app/ports/presentation/convert.ts"

export class StringToDate implements IConvert {
	constructor(private readonly separator: "/" | "-") { }
	handle(value: any): Date {
		if (typeof value !== "string")
			throw new Error("The value must be a string.")

		const [day, month, year, ...others] = value.split(this.separator)

		if (!others || others.length > 0)
			throw new Error("The value must be a date.")

		try { return new Date(Number(year), Number(month) - 1, Number(day)) }
		catch { throw new Error("The value must be a date.") }
	}
}
