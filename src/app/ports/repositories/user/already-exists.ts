import { IUser } from "@entities"

export type TUserAlreadyExists = Omit<IUser, "id" | "password" | "registeredAt">

export interface IUserAlreadyExistsRepository {
	alreadyExists: (data: TUserAlreadyExists) => Promise<boolean>
}
