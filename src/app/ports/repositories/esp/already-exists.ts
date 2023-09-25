import { IESP } from "@entities"
export interface IESPAlreadyExistsRepository {
	alreadyExists: (data: Omit<IESP, "id">) => Promise<boolean>
}
