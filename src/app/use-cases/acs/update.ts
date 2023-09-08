import { IACS } from "@entities";
import { IUpdateACS, TUpdateACSDTO } from "@use-cases";
import { IFindACSRepository, IUpdateACSRepository } from "@app/ports/repositories/acs/mod.ts";
export class UpdateACS implements IUpdateACS {
	constructor(
		readonly updateACSRepository: IUpdateACSRepository,
		readonly findACSRepository: IFindACSRepository
	) {}

	async update(data: TUpdateACSDTO): Promise<IACS> {
		if (!(await this.findACSRepository.findById(data.id)))
			throw new Error("ACS id passed has not been found")

		return this.updateACSRepository.update(data)
	}
}
