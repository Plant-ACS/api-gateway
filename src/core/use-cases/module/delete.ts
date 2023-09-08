import { IModule } from "@entities"

export interface IDeleteModuleDTO {
readonly id: IModule["id"]
}

export interface IDeleteModule {
	delete: (data: IDeleteModuleDTO) => Promise<void>
}
