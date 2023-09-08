import { IACS } from "@entities"
import { TCreateACSDTO } from "@use-cases"

export interface ISaveACSRepository {
	save: (data: TCreateACSDTO) => Promise<IACS>
}
