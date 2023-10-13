import { IAlterEmailRepository } from "./alter-email.ts"
import { ISaveUserRepository } from "./save.ts"
import { IDeleteUserRepository } from "./delete.ts"
import { IFindUserRepository } from "./find.ts"
import { IUpdateUserRepository } from "./update.ts"
import { IEmailAlreadyExistsRepository } from "./email-already-exists.ts"
import { IForgotPasswordRepository } from "./forgot-password.ts"
import { IRecoverPasswordRepository } from "./recover-password.ts"

export * from "./email-already-exists.ts"
export * from "./save.ts"
export * from "./find.ts"
export * from "./delete.ts"
export * from "./update.ts"
export * from "./alter-email.ts"
export * from "./forgot-password.ts"
export * from "./recover-password.ts"

type IUserRepository =
	IAlterEmailRepository &
	ISaveUserRepository &
	IDeleteUserRepository &
	IFindUserRepository &
	IUpdateUserRepository &
	IEmailAlreadyExistsRepository &
	IForgotPasswordRepository &
	IRecoverPasswordRepository

export type {
	IUserRepository,
	IAlterEmailRepository,
	ISaveUserRepository,
	IDeleteUserRepository,
	IFindUserRepository,
	IUpdateUserRepository,
	IEmailAlreadyExistsRepository,
	IForgotPasswordRepository,
	IRecoverPasswordRepository
}
