import { IUser } from '@entities'

export type TValidateEmailDTO = {
    readonly code: string, 
    readonly email: IUser["email"]
}

export interface IValidateEmail {
    validateEmail: (data: TValidateEmailDTO) => Promise<void>
}
