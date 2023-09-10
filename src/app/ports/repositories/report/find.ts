import { IReport } from "@entities"
import { TFindReportByIdDTO, IFindReportSearchDTO } from "@use-cases"

export interface IFindReportRepository {
	findById: (data: TFindReportByIdDTO) => Promise<IReport>
	findSearch: (data: IFindReportSearchDTO) => Promise<IReport[]>
	findAll: () => Promise<IReport[]>
}
