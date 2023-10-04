import { IDeleteModule, TDeleteModuleDTO } from "@use-cases"
import { IFindModuleRepository, IDeleteModuleRepository } from "@app/ports/repositories/module/mod.ts"
export class DeleteModule implements IDeleteModule {
	constructor(
		readonly findModuleRepository: IFindModuleRepository,
		readonly deleteModuleRepository: IDeleteModuleRepository
	) {}

	async delete(data: TDeleteModuleDTO): Promise<void> {
		if (!(await this.findModuleRepository.findById(data.id)))
			throw new Error("The Module id passed does not exist")

		return await this.deleteModuleRepository.delete(data.id)
	}
}
