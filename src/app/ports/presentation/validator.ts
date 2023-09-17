import { type DefaultError } from "@app/errors/default.ts"

export interface IValidator {
  validate: (data: object) => DefaultError | undefined
}

export interface IValidatorType {
	exec: (data: any) => boolean
	toString: () => string
}
