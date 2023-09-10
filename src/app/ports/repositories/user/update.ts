import { IUser } from "@entities"
import { TUpdateUserDTO } from "@use-cases"

export interface IUpdateUserRepository {
	update: (data: TUpdateUserDTO) => Promise<IUser>
}
