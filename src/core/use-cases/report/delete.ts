import { IReport } from "@entities"

export interface IDeleteReportDTO {
	readonly id: IReport["id"]
}

export interface IDeleteReport {
	delete: (data: IDeleteReportDTO) => Promise<void>
}
