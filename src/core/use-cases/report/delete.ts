import { IReport } from "@entities"

export interface IDeleteReportDTO {
	readonly id: IReport["id"]
}

export default interface IDeleteReport {
	delete: (data: IDeleteReportDTO) => Promise<void>
}
