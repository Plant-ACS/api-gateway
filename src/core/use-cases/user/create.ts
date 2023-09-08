import { IUser } from "@core/entities/user.ts"

export type TCreateUserDTO = Omit<IUser, "id">

export default interface ICreateUser {
    create: (data: TCreateUserDTO) => Promise<IUser>
}
