import { IUser } from '@entities'

export interface IAlterEmailDTO {
    readonly id: IUser["id"],
    readonly newEmail: IUser["email"]
}

export interface IAlterEmail {
    alterEmail: (data: IAlterEmailDTO) => Promise<void>
}