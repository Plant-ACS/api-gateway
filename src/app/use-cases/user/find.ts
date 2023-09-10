import { IUser } from "@entities"
import { IFindUser, TFindUserByIdDTO, IFindUserSearchDTO } from "@use-cases"
import { IFindUserRepository } from "@app/ports/repositories/user/mod.ts"

export class FindUser implements IFindUser {
	constructor(
		readonly findUserRepository: IFindUserRepository
	) {}

	async findById(data: TFindUserByIdDTO): Promise<IUser> {
		const user = await this.findUserRepository.findById(data)
		if (!user)
			throw new Error("The user id passed does not exist")

		return user
	}

	async findSearch(data: IFindUserSearchDTO): Promise<IUser[]> {
		return await this.findUserRepository.findSearch(data)
	}

	async findAll(): Promise<IUser[]> {
		return await this.findUserRepository.findAll()
	}
}
