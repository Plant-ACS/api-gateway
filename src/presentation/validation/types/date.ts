import { IValidatorType } from "@app/ports/presentation/validator.ts"

export class DateType implements IValidatorType {
	constructor(private readonly separator: "/" | "-") { }
	exec(data: any): boolean {
		return (
			typeof data === 'string'
			&&
			new RegExp(`^(0[1-9]|[12][0-9]|3[01])${this.separator}(0[1-9]|1[0-2])${this.separator}\\d{4}$`).test(data)
		)
	}
	toString(): string {
		return 'date'
	}
}
