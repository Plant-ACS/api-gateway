import { IDeleteReport, TDeleteReportDTO } from "@use-cases"
import { IFindReportRepository, IDeleteReportRepository } from "@app/ports/repositories/report/mod.ts"

export class DeleteReport implements IDeleteReport {
	constructor(
		readonly findReportRepository: IFindReportRepository,
		readonly deleteReportRepository: IDeleteReportRepository
	) {}

	async delete(data: TDeleteReportDTO): Promise<void> {
		if (!(await this.findReportRepository.findById(data)))
			throw new Error("The Report id passed does not exist")

			return await this.deleteReportRepository.delete(data)
	}
}
