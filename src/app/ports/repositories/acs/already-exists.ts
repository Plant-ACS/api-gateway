import { IACS } from "@entities"

export type TACSAlreadyExists = {
	readonly filter: {
		order: "ASC" | "DESC",
		limit: number,
		page: number
	}
} & Omit<IACS, "id">

export interface IACSAlreadyExists {
	alreadyExists: (data: TACSAlreadyExists) => Promise<boolean>
}
