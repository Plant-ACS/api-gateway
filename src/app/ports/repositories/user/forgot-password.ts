import { IUser } from "@entities"

export interface IForgotPasswordRepository {
	forgotPassword: (data: IUser["email"]) => Promise<void>
}
