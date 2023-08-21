import { User } from "@core/entities/user.ts"

export interface IUpdateUserDTO {
    readonly id: User["id"]
}

export default interface IUpdateUser {
    update: (data: IUpdateUserDTO) => Promise<User>
}