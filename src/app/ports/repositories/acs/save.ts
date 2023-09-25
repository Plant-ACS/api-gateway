import { IACS } from "@entities"
export interface ISaveACSRepository {
	save: (data: Omit<IACS, "id">) => Promise<IACS>
}
