import { IUser } from '@entities'

export type TForgotPasswordDTO = IUser["email"]

export interface IForgotPassword {
    forgotPassword: (data: TForgotPasswordDTO) => Promise<void>
}
