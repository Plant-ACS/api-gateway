import { IModule } from "@entities"

export type TFindModuleSearchDTO = {
	readonly filter: {
		order: "ASC" | "DESC",
		limit: number,
		page: number
	}
} & Partial<Omit<IModule, "id">>

export interface IFindModuleRepository {
	findById: (data: IModule["id"]) => Promise<IModule>
	findSearch: (data: TFindModuleSearchDTO) => Promise<IModule[]>
	findAll: () => Promise<IModule[]>
}
