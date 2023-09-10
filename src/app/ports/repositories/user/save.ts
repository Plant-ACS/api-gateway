import { IUser } from "@entities"
import { TCreateUserDTO } from "@use-cases"

export interface ISaveUserRepository {
	save: (data: TCreateUserDTO) => Promise<IUser>
}
