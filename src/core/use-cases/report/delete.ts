import { IReport } from "@entities"

export type IDeleteReportDTO = IReport["id"]

export interface IDeleteReport {
	delete: (data: IDeleteReportDTO) => Promise<void>
}
