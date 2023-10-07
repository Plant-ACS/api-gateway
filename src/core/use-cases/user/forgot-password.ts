import { IUser } from '@entities'

export type TForgotPasswordDTO = {
	readonly email: IUser["email"]
}
export interface IForgotPassword {
    forgotPassword: (data: TForgotPasswordDTO) => Promise<void>
}
