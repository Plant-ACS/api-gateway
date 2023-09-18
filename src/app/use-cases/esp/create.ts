import { IESP } from "@entities"
import { ICreateESP, TCreateESPDTO } from "@use-cases";
import { IESPAlreadyExistsRepository, ISaveESPRepository } from "@app/ports/repositories/esp/mod.ts"
import { ConflictError } from "@app/errors/mod.ts";

export class CreateESP implements ICreateESP {
	constructor(
		readonly espAlreadyExists: IESPAlreadyExistsRepository,
		readonly saveESPRepository: ISaveESPRepository
	) {}

	async create(data: TCreateESPDTO): Promise<IESP> {
		if ((
			await this.espAlreadyExists.alreadyExists({
				userId: data.userId,
				ports: data.ports
			})) === true
		)
		throw new ConflictError("ESP already exists")

		return await this.saveESPRepository.save(data)
	}
}
