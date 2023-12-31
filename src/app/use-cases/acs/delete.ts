import { IDeleteACS, TDeleteACSDTO } from "@use-cases"
import { IDeleteACSRepository } from "@app/ports/repositories/acs/mod.ts"
import { IFindACSRepository } from "@app/ports/repositories/acs/find.ts"
export class DeleteACS implements IDeleteACS {
	constructor(
		readonly deleteACSRepository: IDeleteACSRepository,
		readonly findACSRepository: IFindACSRepository
	) {}

	async delete(data: TDeleteACSDTO): Promise<void> {
		if (!(await this.findACSRepository.findById(data.id)))
			throw new Error("The ACS id passed does not exist")

		await this.deleteACSRepository.delete(data.id)
	}
}
