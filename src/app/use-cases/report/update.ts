import { IReport } from "@entities"
import { IUpdateReport, TUpdateReportDTO } from "@use-cases";
import { IFindReportRepository, IUpdateReportRepository } from "@app/ports/repositories/report/mod.ts"

export class update implements IUpdateReport {
	constructor(
		readonly findReportRepository: IFindReportRepository,
		readonly updateReportRepository: IUpdateReportRepository
	){}

	async update(data: TUpdateReportDTO): Promise<IReport> {
		if (await this.findReportRepository.findById(data.id))
			throw new Error("The Report id passed does not exist")

		return await this.updateReportRepository.update(data)
	}
}
