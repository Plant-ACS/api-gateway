import { IUser } from "@core/entities/user.ts"

export type TAlterUserNameDTO = {
	old: IUser["username"],
	new: IUser["username"]
}

export interface IAterUsername {
	alterUsername: (data: TAlterUserNameDTO) => Promise<void>
}
