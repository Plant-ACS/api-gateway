import { IReport } from "@entities"

export type TDeleteReportDTO = {
	readonly id: IReport["id"]
}

export interface IDeleteReport {
	delete: (data: TDeleteReportDTO) => Promise<void>
}
