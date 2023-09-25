import { IModule } from "@entities"
export interface ISaveModuleRepository {
	save: (data: Omit<IModule, "id">) => Promise<IModule>
}
