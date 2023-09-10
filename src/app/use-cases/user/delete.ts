import { IDeleteUser, TDeleteUserDTO } from "@use-cases"
import { IFindUserRepository, IDeleteUserRepository } from "@app/ports/repositories/user/mod.ts"

export class DeleteUser implements IDeleteUser {
	constructor(
		readonly findUserRepository: IFindUserRepository,
		readonly deleteUserRepository:  IDeleteUserRepository
	) {}

	async delete(data: TDeleteUserDTO): Promise<void> {
		if(!(await this.findUserRepository.findById(data)))
			throw new Error("The User id passed does not exist")

		return await this. deleteUserRepository.delete(data)
	}
}
