import { TDeleteModuleDTO } from "@use-cases"

export interface IDeleteModuleRepository {
	delete: (data: TDeleteModuleDTO) => Promise<void>
}
