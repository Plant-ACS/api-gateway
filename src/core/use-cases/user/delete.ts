import { IUser } from "@core/entities/user.ts"

export type TDeleteUserDTO = IUser["id"]

export interface IDeleteUser {
    delete: (data: TDeleteUserDTO) => Promise<void>
}
