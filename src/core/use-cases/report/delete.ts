import { IReport } from "@entities"

export type TDeleteReportDTO = IReport["id"]

export interface IDeleteReport {
	delete: (data: TDeleteReportDTO) => Promise<void>
}
