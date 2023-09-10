import { TCreateUserDTO } from "@use-cases"

export interface IUserAlreadyExistsRepository {
	alreadyExists: (data: TCreateUserDTO) => Promise<boolean>
}
