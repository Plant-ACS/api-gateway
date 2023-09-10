import { IDeleteReportDTO } from "@use-cases"

export interface IDeleteReportRepository {
	delete: (data: IDeleteReportDTO) => Promise<void>
}
