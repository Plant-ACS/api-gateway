import { IValidator, IValidatorType } from "@app/ports/presentation/mod.ts"
import { UtilsFieldName } from "@pre/validation/utils/field-name.ts"
import { BadRequestError, DefaultError } from "@app/errors/mod.ts"

export class TypeFieldValidator implements IValidator {
	constructor(private readonly fieldName: string, private readonly types: IValidatorType[]) { }
	validate(data: object): DefaultError | undefined {
		const field = new UtilsFieldName(this.fieldName, data)

		if(field.validateExistFieldName())
			if(!this.types.some(t => t.exec(field.getData())))
				return new BadRequestError(
					`the field is invalid`,
					{
						type: 'type-field',
						field: this.fieldName,
						allowedTypes: this.types.map(t => t.toString())
					}
				)
	}
}
