import { IModule } from "@entities"
import { TUpdateModuleDTO } from "@use-cases"

export interface IUpdateModuleRepository {
	update: (data: TUpdateModuleDTO) => Promise<IModule>
}
