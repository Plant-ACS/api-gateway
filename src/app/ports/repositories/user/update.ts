import { IUser } from "@entities"
export type TUpdateUserDTO = {
	readonly id: IUser["id"],
	readonly username?: IUser["username"]
}
export interface IUpdateUserRepository {
	update: (data: TUpdateUserDTO) => Promise<IUser>
}
