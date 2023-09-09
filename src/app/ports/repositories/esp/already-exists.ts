import { TCreateESPDTO } from "@use-cases"

export interface IESPAlreadyExistsRepository {
	alreadyExists: (data: TCreateESPDTO) => Promise<boolean>
}
