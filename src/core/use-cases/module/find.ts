import { IModule } from "@entities"

export type TFindModuleByIdDTO = IModule["id"]

export interface IFindModuleSearchDTO {
	name?: IModule["name"],
	isAnalog?: IModule["isAnalog"],
	isDigital?: IModule["isDigital"],
	maxVoltage?: IModule["maxVoltage"],
	pinAmount?: IModule["pinAmount"]
	readonly filter: {
		order: "ASC" | "DESC",
		limit: number,
		page: number
	}
}

export interface IFindModules {
	findById: (data: TFindModuleByIdDTO) => Promise<IModule>
	findAll: () => Promise<IModule[]>
}
