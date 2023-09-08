import { IACS } from "@entities"
import { TUpdateACSDTO } from "@use-cases"

export interface IUpdateACSRepository {
	update: (data: TUpdateACSDTO) => Promise<IACS>
}
