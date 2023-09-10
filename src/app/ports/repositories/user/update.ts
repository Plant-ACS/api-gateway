import { IUser } from "@entities"
import { TUpdateUserDTO } from "@use-cases"

export interface IUpdateUserReporitory {
	update: (data: TUpdateUserDTO) => Promise<IUser>
}
