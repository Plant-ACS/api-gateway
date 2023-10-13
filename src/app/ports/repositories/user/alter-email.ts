import { IUser } from '@entities'

export type TAlterEmailDTO = {
    readonly id: IUser["id"],
    readonly newEmail: IUser["email"]
}

export interface IAlterEmailRepository {
    alterEmail: (data: TAlterEmailDTO) => Promise<void>
}
