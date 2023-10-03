import { IUser } from "@entities"

export interface ISaveUserRepository {
	save: (data: Omit<IUser, "id">) => Promise<IUser>
}
