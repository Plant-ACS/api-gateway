import { IReport } from "@entities"
export interface ISaveReportRepository {
	save: (data: IReport["id"]) => Promise<IReport>
}
