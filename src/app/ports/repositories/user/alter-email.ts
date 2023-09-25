import { IUser } from '@entities'

export type TAlterEmailRepositoryDTO = {
    readonly id: IUser["id"],
    readonly newEmail: IUser["email"]
}

export interface IAlterEmailRepository {
    alterEmail: (data: TAlterEmailRepositoryDTO) => Promise<void>
}