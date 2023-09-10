import { IReport } from "@entities"
import { TUpdateReportDTO } from "@use-cases"

export interface IUpdateReportRepository {
	update: (data: TUpdateReportDTO) => Promise<IReport>
}
