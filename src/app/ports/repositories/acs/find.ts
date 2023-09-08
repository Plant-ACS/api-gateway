import { IACS } from "@entities"
import { IFindSearchACSDTO } from "@use-cases"

export interface IFindACSRepository {
	findById: (data: IACS["id"]) => Promise<IACS>
	findSearch: (data: IFindSearchACSDTO) => Promise<IACS[]>
	findAll: () => Promise<IACS[]>
}
