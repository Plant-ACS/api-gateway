import { IFindESP, IFindESPSearchDTO, TFindESPByIdDTO } from "@use-cases"
import { IESP } from "@entities"
import { IFindESPRepository } from "@app/ports/repositories/esp/mod.ts"

export class FindESP implements IFindESP {
	constructor(
		readonly findESPRepository: IFindESPRepository
	) {}

	async findById(data: TFindESPByIdDTO): Promise<IESP> {
		const esp = await this.findESPRepository.findById(data)

		if (!esp)
			throw new Error("The ESP id passed does not exist")
		return esp
	}

	async findSearch(data: IFindESPSearchDTO): Promise<IESP[]> {
		return await this.findESPRepository.findSearch(data)
	}

	async findAll(): Promise<IESP[]> {
		return await this.findESPRepository.findAll()
	}

}
