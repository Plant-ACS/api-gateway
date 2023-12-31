import { IModule } from "@entities"

export type TUpdateModuleDTO = {
	readonly id: IModule["id"]
} & Partial<Omit<IModule, "id">>

export interface IUpdateModule {
	update: (data: TUpdateModuleDTO) => Promise<IModule>
}
