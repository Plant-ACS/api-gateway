import { IReport } from "@entities"
import { ICreateReport, TCreateReportDTO } from "@use-cases";
import { IReportAlreadyExistsRepository, ISaveReportRepository } from "@app/ports/repositories/report/mod.ts"

export class CreateReport implements ICreateReport {
	constructor(
		readonly reportAlreadyExistsRepository: IReportAlreadyExistsRepository,
		readonly saveReportRepository: ISaveReportRepository

	) {}

	async create(data: TCreateReportDTO): Promise<IReport> {
		if (await this.reportAlreadyExistsRepository.alreadyExists({
				espId: data.espId,
				moduleId: data.moduleId,
				generatedAt: data.generatedAt
			}) === true
		)
			throw new Error("Report already exists")

		return await this.saveReportRepository.save(data)
	}
}
