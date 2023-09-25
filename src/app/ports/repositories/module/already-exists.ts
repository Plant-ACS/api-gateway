import { IModule } from "@entities"
export interface IModuleAlreadyExistsRepository {
	alreadyExists: (data: Omit<IModule, "id">) => Promise<boolean>
}
