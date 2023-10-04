import { IACS } from "@entities"

export type TFindACSByIdDTO = {
	readonly id: IACS["id"]
}

export interface IFindSearchACSDTO {
	name?: IACS["name"],
	espId?: IACS["espId"],
	createdAt?: IACS["createdAt"],
	readonly filter?: {
		readonly order: "ASC" | "DESC",
		readonly limit: number,
		readonly page: number
	}
}

export interface IFindACS {
    findById: (data: TFindACSByIdDTO) => Promise<IACS>
		findSearch: (data: IFindSearchACSDTO) => Promise<IACS[]>
    findAll: () => Promise<IACS[]>
}
