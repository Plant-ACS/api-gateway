import { IValidatorType } from "@app/ports/presentation/validator.ts"

export class StringType implements IValidatorType {
	exec(data: any): boolean {
		return typeof data === 'string'
	}
	toString(): string {
		return 'string'
	}
}
