import { IReport } from "@entities"
export interface IReportAlreadyExistsRepository {
	alreadyExists: (data: Omit<IReport, "id">) => Promise<boolean>
}
