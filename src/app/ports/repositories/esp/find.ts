import { IESP } from "@entities"
export type TFindESPSearchDTO = {
	readonly filter: {
		order: "ASC" | "DESC",
		limit: number,
		page: number
	}
} & Partial<Omit<IESP, "id">>

export interface IFindESPRepository {
	findById: (data: IESP["id"]) => Promise<IESP>
	findSearch: (data: TFindESPSearchDTO) => Promise<IESP[]>
	findAll: () => Promise<IESP[]>
}
