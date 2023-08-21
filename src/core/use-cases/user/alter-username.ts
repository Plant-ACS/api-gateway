import { User } from "@core/entities/user.ts"

export type TAlterUserNameDTO = {
	old: User["username"],
	new: User["username"]
}

export default interface IAterUsername {
	alterUsername: (data: TAlterUserNameDTO) => Promise<void>
}
