import { IUser } from "@core/entities/user.ts"

export type TAlterUsernameDTO = {
	old: IUser["username"],
	new: IUser["username"]
}

export interface IAlterUsername {
	alterUsername: (data: TAlterUsernameDTO) => Promise<void>
}
