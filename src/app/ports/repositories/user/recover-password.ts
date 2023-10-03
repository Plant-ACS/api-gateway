import { IUser } from "@entities"

export type IRecoverPasswordDTO = {
	readonly token: string,
	readonly password: IUser["password"]
}

export interface IRecoverPasswordRepository {
	recoverPassword: (data: IRecoverPasswordDTO) => Promise<void>
}
