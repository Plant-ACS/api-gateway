import { TCreateModuleDTO } from "@use-cases"

export interface IModuleAlreadyExistsRepository {
	alreadyExists: (data: TCreateModuleDTO) => Promise<boolean>
}
