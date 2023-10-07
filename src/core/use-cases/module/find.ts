import { IModule } from "@entities"

export type TFindModuleByIdDTO = {
	readonly id: IModule["id"]
}

export interface IFindModuleSearchDTO {
	name?: IModule["name"],
	isAnalog?: IModule["isAnalog"],
	isDigital?: IModule["isDigital"],
	maxVoltage?: IModule["maxVoltage"],
	pinAmount?: IModule["pinAmount"]
	readonly filter?: {
		order: "ASC" | "DESC",
		limit: number,
		page: number
	}
}

export interface IFindModule {
	findById: (data: TFindModuleByIdDTO) => Promise<IModule>
	findSearch: (data: IFindModuleSearchDTO) => Promise<IModule[]>
	findAll: () => Promise<IModule[]>
}
