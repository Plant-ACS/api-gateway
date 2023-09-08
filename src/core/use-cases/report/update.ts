import { IReport } from "@entities"

export type TUpdateReportDTO = {
	readonly id: IReport["id"]
} & Partial<Omit<IReport, "id">>

export default interface IUpdateReport {
	update: (data: TUpdateReportDTO) => Promise<IReport>
}
