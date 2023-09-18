import { IModule } from "@entities"
import { ICreateModule, TCreateModuleDTO } from "@use-cases"
import { IModuleAlreadyExistsRepository, ISaveModuleRepository } from "@app/ports/repositories/module/mod.ts"
import { ConflictError } from "@app/errors/mod.ts"
export class CreateModule implements ICreateModule {
	constructor (
		readonly moduleAlreadyExists: IModuleAlreadyExistsRepository,
		readonly saveModuleRepository: ISaveModuleRepository
	) {}

	async create(data: TCreateModuleDTO): Promise<IModule> {
		if (await this.moduleAlreadyExists.alreadyExists({
				name: data.name,
				isAnalog: data.isAnalog,
				isDigital: data.isDigital,
				maxVoltage: data.maxVoltage,
				pinAmount: data.pinAmount
			}) === true
		)
		throw new ConflictError("Module already exists")

		return await this.saveModuleRepository.save(data)
	}

}
