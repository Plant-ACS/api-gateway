import { type DefaultError } from "@app/errors/default-error.ts"

export interface IValidator {
  validate: (data: object) => DefaultError | undefined
}
