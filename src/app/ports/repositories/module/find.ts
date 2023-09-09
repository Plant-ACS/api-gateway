import { IModule } from "@entities"
import { TFindModuleByIdDTO, IFindModuleSearchDTO } from "@use-cases"

export interface IFindModuleRepository {
	findById: (data: TFindModuleByIdDTO) => Promise<IModule>
	findSearch: (data: IFindModuleSearchDTO) => Promise<IModule[]>
	findAll: () => Promise<IModule[]>
}
