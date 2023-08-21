import { User } from "@core/entities/user.ts"

export interface IDeleteUserDTO {
    readonly id: User["id"]
}

export default interface IDeleteUser {
    delete: (data: IDeleteUserDTO) => Promise<void>
}
