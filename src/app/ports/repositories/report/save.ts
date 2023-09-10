import { IReport } from "@entities"
import { TCreateReportDTO } from "@use-cases"

export interface ISaveReportRepository {
	save: (data: TCreateReportDTO) => Promise<IReport>
}
