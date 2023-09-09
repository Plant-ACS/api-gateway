import { IESP } from "@entities"

export type TFindESPByIdDTO = IESP["id"]

export interface IFindESPSearchDTO {
	userId?: IESP["userId"],
	ports?: IESP["ports"],
	readonly filter: {
		order: "ASC" | "DESC",
		limit: number,
		page: number
	}
}

export interface IFindESP {
	findById: (data: TFindESPByIdDTO) => Promise<IESP>
	findSearch: (data: IFindESPSearchDTO) => Promise<IESP[]>
	findAll: () => Promise<IESP[]>
}
