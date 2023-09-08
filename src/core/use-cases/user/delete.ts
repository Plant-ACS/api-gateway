import { IUser } from "@core/entities/user.ts"

export interface IDeleteUserDTO {
    readonly id: IUser["id"]
}

export interface IDeleteUser {
    delete: (data: IDeleteUserDTO) => Promise<void>
}
