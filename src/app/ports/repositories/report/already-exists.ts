import { TCreateReportDTO } from "@use-cases"

export interface IReportAlreadyExistsRepository {
	alreadyExists: (data: TCreateReportDTO) => Promise<boolean>
}
