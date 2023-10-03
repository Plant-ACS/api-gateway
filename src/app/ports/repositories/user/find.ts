import { IUser } from "@entities"

export type IFindUserSearchDTO = {
	readonly filter: {
		order: "ASC" | "DESC",
		limit: number,
		page: number
	}
} & Partial<Omit<IUser, "id" | "password" | "registeredAt">>

export interface IFindUserRepository {
	findById: (data: IUser["id"]) => Promise<IUser>
	findSearch: (data: IFindUserSearchDTO) => Promise<IUser[]>
	findAll: () => Promise<IUser[]>
}
