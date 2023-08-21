import { User } from "@core/entities/user.ts"

export interface IFindUserById {
	readonly id: User["id"]
}
export type IFilterUsersDTO = {
	order: "ASC" | "DESC"
}
export interface IFindUser {
	findById: (data: IFindUserById) => Promise<User>
	findAll: () => Promise<User[]>
}
