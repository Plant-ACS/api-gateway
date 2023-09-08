import { IUser } from "@core/entities/user.ts"

export interface IFindUserById {
	readonly id: IUser["id"]
}
export type IFilterUsersDTO = {
	order: "ASC" | "DESC"
}
export interface IFindUser {
	findById: (data: IFindUserById) => Promise<IUser>
	findAll: () => Promise<IUser[]>
}
