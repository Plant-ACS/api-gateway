import { IModule } from "@entities"
import { IFindModule, TFindModuleByIdDTO, IFindModuleSearchDTO } from "@use-cases"
import { IFindModuleRepository } from "@app/ports/repositories/module/mod.ts"
export class FindModule implements IFindModule {
	constructor(
		readonly findModuleRepository: IFindModuleRepository
	){}

	async findById(data: TFindModuleByIdDTO): Promise<IModule> {
		const module = await this.findModuleRepository.findById(data)
		if (!module)
			throw new Error("The Module id passed does not exist")

			return module
	}

	async findSearch(data: IFindModuleSearchDTO): Promise<IModule[]> {
		return await this.findModuleRepository.findSearch(data)
	}

	async findAll(): Promise<IModule[]> {
		return await this.findModuleRepository.findAll()
	}
}
