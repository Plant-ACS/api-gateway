import { IValidator } from "@app/ports/presentation/mod.ts"
import { DefaultError } from "@app/errors/default.ts"

export class CompositeValidation implements IValidator {
	constructor(private readonly validations: IValidator[]) {}

  validate(data: object): DefaultError | undefined {
    for (const validation of this.validations) {
      const error = validation.validate(data)
      if (error instanceof DefaultError) return error
    }
  }
}
