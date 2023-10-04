import { IModule } from "@entities"

export type TDeleteModuleDTO = {
	readonly id: IModule["id"]
}

export interface IDeleteModule {
	delete: (data: TDeleteModuleDTO) => Promise<void>
}
