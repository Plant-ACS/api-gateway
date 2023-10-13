import { IUser } from "@entities"

export type IRecoverPasswordDTO = {
	readonly token: string,
	readonly id: IUser["id"],
	readonly password: IUser["password"]
}

export interface IRecoverPasswordRepository {
	recoverPassword: (data: IRecoverPasswordDTO) => Promise<void>
}
