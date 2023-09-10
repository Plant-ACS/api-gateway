import { IAlterUsername, TAlterUsernameDTO } from "@use-cases"
import { IUserAlreadyExistsRepository, IFindUserRepository, IAlterUsernameRepository } from "@app/ports/repositories/user/mod.ts"

export class AlterUsername implements IAlterUsername {
	constructor(
		readonly userAlreadyExistsRepository: IUserAlreadyExistsRepository,
		readonly findUserRepository: IFindUserRepository,
		readonly alterUsernameRepository: IAlterUsernameRepository
	) {}

	async alterUsername(data: TAlterUsernameDTO): Promise<void> {
		if (!(await this.userAlreadyExistsRepository.alreadyExists({
			username: data.old
			})) === false
		)
			throw new Error("The Username passed does not exist")

		return await this.alterUsernameRepository.alterUsername(data)
	}
}
