import { IModule } from "@entities"

export type TCreateModuleDTO = Omit<IModule, "id">

export default interface ICreateModule {
	create: (data: TCreateModuleDTO) => Promise<IModule>
}
