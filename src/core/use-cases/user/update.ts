import { IUser } from "@core/entities/user.ts"

export type TUpdateUserDTO = {
    readonly id: IUser["id"],
    readonly username?: IUser["username"]
}
export interface IUpdateUser {
    update: (data: TUpdateUserDTO) => Promise<IUser>
}
