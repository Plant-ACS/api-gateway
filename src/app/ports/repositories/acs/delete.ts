import { IACS } from "@entities"

export interface IDeleteACSRepository {
	delete: (data: IACS["id"]) => Promise<void>
}
