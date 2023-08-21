import { User } from "@core/entities/user.ts"

export type TUpdateUserDTO = {
    readonly id: User["id"]
	} & Partial<Omit<User, "id" | "registeredAt">>
export default interface IUpdateUser {
    update: (data: TUpdateUserDTO) => Promise<User>
}
