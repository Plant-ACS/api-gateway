import { IUser } from "@core/entities/user.ts"

export type TDeleteUserDTO = {
	readonly id: IUser["id"]
}

export interface IDeleteUser {
    delete: (data: TDeleteUserDTO) => Promise<void>
}
