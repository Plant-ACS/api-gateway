import { IReport } from "@entities"

export interface IDeleteReportRepository {
	delete: (data: IReport["id"]) => Promise<void>
}
