import { IReport } from "@entities"
export interface ISaveReportRepository {
	save: (data: Omit<IReport, "id">) => Promise<IReport>
}
