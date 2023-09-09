import { IESP } from "@entities"
import { TCreateESPDTO } from "@use-cases"

export interface ISaveESPRepository {
	save: (data: TCreateESPDTO) => Promise<IESP>
}
