import { IUser } from "@entities"
import { ICreateUser, TCreateUserDTO } from "@use-cases"
import { IUserAlreadyExistsRepository, ISaveUserRepository} from "@app/ports/repositories/user/mod.ts"
import { ConflictError } from "@app/errors/mod.ts"
export class CreateUser implements ICreateUser {
	constructor(
		readonly userAlreadyExistsRepository: IUserAlreadyExistsRepository,
		readonly saveUserRepository: ISaveUserRepository
	) {}

	async create(data: TCreateUserDTO): Promise<IUser> {
		if (await this.userAlreadyExistsRepository.alreadyExists({
				username: data.username,
				email: data.email
			}) === true
		)
			throw new ConflictError("User already exitsts")

		return await this.saveUserRepository.save(data)
	}
}
