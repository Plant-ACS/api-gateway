import { IFindACS, IFindSearchACSDTO } from "@use-cases"
import { IACS } from "@entities"
import { IFindACSRepository } from "@app/ports/repositories/acs/find.ts";

export class FindACS implements IFindACS {
	constructor(
		readonly findACSRepository: IFindACSRepository
	) {}

	async findById(data: number): Promise<IACS> {
		const acs = await this.findACSRepository.findById(data)
		if (!acs) throw new Error("ACS has not been found")

		return acs
	}

	async findSearch(data: IFindSearchACSDTO): Promise<IACS[]> {
		return await this.findACSRepository.findSearch(data)
	}

	async findAll(): Promise<IACS[]> {
		return await this.findACSRepository.findAll()
	}
}
