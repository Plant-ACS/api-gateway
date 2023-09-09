import { IModule } from "@entities"

export type TDeleteModuleDTO = IModule["id"]

export interface IDeleteModule {
	delete: (data: TDeleteModuleDTO) => Promise<void>
}
