import { IModule } from "@entities";
import { IUpdateModule, TUpdateModuleDTO } from "@use-cases"
import { IFindModuleRepository, IUpdateModuleRepository } from "@app/ports/repositories/module/mod.ts"

export class UpdateModule implements IUpdateModule {
	constructor(
		readonly findModuleRepository: IFindModuleRepository,
		readonly updateModuleRepository: IUpdateModuleRepository
	) {}

	async update(data: TUpdateModuleDTO): Promise<IModule> {
		if (!await this.findModuleRepository.findById(data.id))
			throw new Error("The Module id passed does not exist")

		return await this.updateModuleRepository.update(data)
	}
}
