import { IUser } from "@entities"
import { IUpdateUser, TUpdateUserDTO } from "@use-cases"
import { IFindUserRepository,IUpdateUserRepository } from "@app/ports/repositories/user/mod.ts"

export class UpdateUser implements IUpdateUser {
	constructor(
		readonly findUserRepository: IFindUserRepository,
		readonly udateUserRepository: IUpdateUserRepository
	){}

	async update(data: TUpdateUserDTO): Promise<IUser> {
		if (!(await this.findUserRepository.findById(data.id)))
			throw new Error("The User id passed does not exist")

		return await this.udateUserRepository.update(data)
	}
}
