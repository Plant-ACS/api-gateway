import { User } from "@core/entities/user.ts"

export type TCreateUserDTO = Omit<User, "id">

export default interface ICreateUser {
    create: (data: TCreateUserDTO) => Promise<User>
}