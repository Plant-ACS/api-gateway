import { IUser } from "@core/entities/user.ts"

export type TUpdateUserDTO = {
    readonly id: IUser["id"]
	} & Partial<Omit<IUser, "id" | "registeredAt">>
export default interface IUpdateUser {
    update: (data: TUpdateUserDTO) => Promise<IUser>
}
