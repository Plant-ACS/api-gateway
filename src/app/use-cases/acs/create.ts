import { IACS } from "@entities"
import { ICreateACS, TCreateACSDTO } from "@use-cases"
import { IACSAlreadyExists, ISaveACSRepository } from "@app/ports/repositories/acs/mod.ts"
import { ConflictError } from "@app/errors/mod.ts"

export default class CreateACS implements ICreateACS {
	constructor(
		readonly saveACSRepository: ISaveACSRepository,
		readonly acsAlreadyExists: IACSAlreadyExists
	) {}

	async create(data: TCreateACSDTO): Promise<IACS> {
		if (await this.acsAlreadyExists.alreadyExists({
				name: data.name,
				espId: data.espId,
				createdAt: data.createdAt,
			}) === true
		)
		throw new ConflictError("ACS already exists")

		return await this.saveACSRepository.save(data)
	}
}
