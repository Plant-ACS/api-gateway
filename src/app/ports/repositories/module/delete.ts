import { IDeleteModuleDTO } from "@use-cases"

export interface IDeleteModuleRepository {
	delete: (data: IDeleteModuleDTO) => Promise<void>
}
