import { IACS } from "@entities"
export interface IACSAlreadyExistsRepository {
	alreadyExists: (data: Omit<IACS, "id">) => Promise<boolean>
}
