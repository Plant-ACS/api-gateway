import { IESP } from "@entities"

export type TFindESPByIdDTO = IESP["id"]
export type TFilterESPDTO = {
	order: "ASC" | "DESC"
}

export default interface IFindESP {
	findById: (data: TFindESPByIdDTO) => Promise<IESP>
	findAll: () => Promise<IESP[]>
}
