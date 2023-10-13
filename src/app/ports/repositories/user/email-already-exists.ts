import { IUser } from "@entities"

export type TEmailAlreadyExistsDTO =  {
	readonly email: IUser["email"]
}
export interface IEmailAlreadyExistsRepository {
	emailAlreadyExists: (data: TEmailAlreadyExistsDTO) => Promise<boolean>
}
