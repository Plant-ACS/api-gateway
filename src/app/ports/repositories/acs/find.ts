import { IACS } from "@entities"

export type TFindACSSearchDTO = {
	readonly filter: {
		readonly order: "ASC" | "DESC",
		readonly limit: number,
		readonly page: number
	}
} & Partial<Omit<IACS, "id">>

export interface IFindACSRepository {
	findById: (data: IACS["id"]) => Promise<IACS>
	findSearch: (data: TFindACSSearchDTO) => Promise<IACS[]>
	findAll: () => Promise<IACS[]>
}
