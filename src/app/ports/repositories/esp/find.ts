import { IESP } from "@entities"
import { TFindESPByIdDTO, IFindESPSearchDTO } from "@use-cases"

export interface IFindESPRepository {
	findById: (data: TFindESPByIdDTO) => Promise<IESP>
	findSearch: (data: IFindESPSearchDTO) => Promise<IESP[]>
	findAll: () => Promise<IESP[]>
}
