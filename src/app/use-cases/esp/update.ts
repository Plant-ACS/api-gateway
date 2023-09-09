import { IESP } from "@entities"
import { IUpdateESP, TUpdateESPDTO } from "@use-cases"
import { IFindESPRepository, IUpdateESPRepository } from "@app/ports/repositories/esp/mod.ts"

export class UpdateESP implements IUpdateESP {
	constructor(
		readonly findESPRepository: IFindESPRepository,
		readonly updateESPRepository: IUpdateESPRepository
	) {}

	async update(data: TUpdateESPDTO): Promise<IESP> {
		if (!(await this.findESPRepository.findById(data.id)))
			throw new Error("The ESP id passed does not exist")

		return await this.updateESPRepository.update(data)
	}
}
