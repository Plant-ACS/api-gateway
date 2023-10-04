import { IACS } from "@entities"

export type TFindSearchACSDTO = {
	readonly filter: {
		readonly order: "ASC" | "DESC",
		readonly limit: number,
		readonly page: number
	}
} & Partial<Omit<IACS, "id">>

export interface IFindACSRepository {
	findById: (data: IACS["id"]) => Promise<IACS>
	findSearch: (data: TFindSearchACSDTO) => Promise<IACS[]>
	findAll: () => Promise<IACS[]>
}
