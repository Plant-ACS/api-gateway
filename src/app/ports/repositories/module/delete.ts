import { IModule } from "@entities"
export interface IDeleteModuleRepository {
	delete: (data: IModule["id"]) => Promise<void>
}
