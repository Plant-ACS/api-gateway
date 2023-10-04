import { IDeleteESP, TDeleteESPDTO } from "@use-cases";
import { IFindESPRepository, IDeleteESPRepository } from "@app/ports/repositories/esp/mod.ts"

export class DeleteESP implements IDeleteESP {
	constructor(
		readonly findESPRepository: IFindESPRepository,
		readonly deleteESPRepository: IDeleteESPRepository
	) {}

	async delete(data: TDeleteESPDTO): Promise<void> {
		if (!(await this.findESPRepository.findById(data.id)))
			throw new Error("The ESP id passed does not exist")

			this.deleteESPRepository.delete(data.id)
	}
}
