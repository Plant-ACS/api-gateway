import { IValidatorType } from "@app/ports/presentation/mod.ts"

export class BooleanType implements IValidatorType {
		exec(data: any) {
				return typeof data === 'boolean';
		}
		toString() {
				return 'boolean';
		}
}
