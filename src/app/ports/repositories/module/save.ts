import { IModule } from "@entities"
import { TCreateModuleDTO } from "@use-cases"

export interface ISaveModuleRepository {
	save: (data: TCreateModuleDTO) => Promise<IModule>
}
