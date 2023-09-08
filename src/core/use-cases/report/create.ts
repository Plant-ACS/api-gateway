import { IReport } from "@entities"

export type TCreateReportDTO = Omit<IReport, "id">

export default interface ICreateReport {
	create: (data: TCreateReportDTO) => Promise<IReport>
}
