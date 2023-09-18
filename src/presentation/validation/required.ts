import { IValidator } from "@app/ports/presentation/validator.ts"
import { DefaultError } from "@app/errors/default.ts"
import { UtilsFieldName } from "@pre/validation/utils/field-name.ts"
import { BadRequestError } from "@app/errors/mod.ts"

export class RequiredValidator implements IValidator {
	constructor(
		private readonly fieldName: string
	) {}

	validate(data: object): DefaultError | undefined {
		const field = new UtilsFieldName(this.fieldName, data)
		if (!field.validateExistFieldName())
				return new BadRequestError(
					`the field is required`,
					{
						type: 'required',
						field: this.fieldName
					}
				)
	}
}
