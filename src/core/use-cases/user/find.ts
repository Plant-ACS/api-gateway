import { IUser } from "@core/entities/user.ts"

export type TFindUserByIdDTO = IUser["id"]

export interface IFindUserSearchDTO {
	username?: string,
	email?: string
	readonly filter?: {
		order: "ASC" | "DESC",
		limit: number,
		page: number
	}
}

export interface IFindUser {
	findById: (data: TFindUserByIdDTO) => Promise<IUser>
	findSearch: (data: IFindUserSearchDTO) => Promise<IUser[]>
	findAll: () => Promise<IUser[]>
}
