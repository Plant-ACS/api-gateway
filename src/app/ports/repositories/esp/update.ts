import { TUpdateESPDTO } from "@use-cases"
import { IESP } from "@entities"

export interface IUpdateESPRepository {
	update: (data: TUpdateESPDTO) => Promise<IESP>
}
