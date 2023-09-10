import { IReport } from "@entities"
import { IFindReport, TFindReportByIdDTO, IFindReportSearchDTO } from "@use-cases"
import { IFindReportRepository } from "@app/ports/repositories/report/mod.ts"

export class FindReport implements IFindReport {
	constructor(
		readonly findReportRepository: IFindReportRepository
	){}

	async findById(data: TFindReportByIdDTO): Promise<IReport> {
		const report = await this.findReportRepository.findById(data)

		if (!report)
			throw new Error("The Report id passed does not exist")

		return report
	}

	async findSearch(data: IFindReportSearchDTO): Promise<IReport[]> {
		return await this.findReportRepository.findSearch(data)
	}

	async findAll(): Promise<IReport[]> {
		return await this.findReportRepository.findAll()
	}
}
