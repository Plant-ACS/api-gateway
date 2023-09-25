import { IESP } from "@entities"
export interface ISaveESPRepository {
	save: (data: Omit<IESP, "id">) => Promise<IESP>
}
