import { IUser } from "@entities"

export type TEmailAlreadyExists = IUser["email"]

export interface IEmailAlreadyExistsRepository {
	emailAlreadyExists: (data: TEmailAlreadyExists) => Promise<boolean>
}
