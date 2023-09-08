import { IModule } from "@entities"

export type TFindModuleByIdDTO = IModule["id"]
export type TFilterModules = {
	order: "ASC" | "DESC"
}

export interface IFindModules {
	findById: (data: TFindModuleByIdDTO) => Promise<IModule>
	findAll: () => Promise<IModule[]>
}
