import { IValidator } from "@app/ports/presentation/mod.ts"
import { UtilsFieldName } from "@pre/validation/utils/field-name.ts"
import { BadRequestError, DefaultError } from "@app/errors/mod.ts"

export class DefaultValueValidator implements IValidator {
	constructor(private readonly fieldName: string, private readonly defaultValues: any[]) { }
	validate(data: object): DefaultError | undefined {
		const field = new UtilsFieldName(this.fieldName, data)
		if (field.validateExistFieldName())
			if (this.defaultValues.includes(field.getData()))
				return new BadRequestError(
					`the field is invalid`,
					{
						type: 'default-value',
						field: this.fieldName,
						allowedValues: this.defaultValues
					}
				)
	}
}
