import { IValidatorType } from "@app/ports/presentation/validator.ts"

export class NumberType implements IValidatorType {
	exec(data: any): boolean {
		return typeof data === 'number'
	}
	toString(): string {
		return 'number'
	}
}
