import { IUser } from "@core/entities/user.ts"

export type TCreateUserDTO = Omit<IUser, "id">

export interface ICreateUser {
    create: (data: TCreateUserDTO) => Promise<IUser>
}
