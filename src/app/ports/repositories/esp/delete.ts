import { IESP } from "@entities"
export interface IDeleteESPRepository {
	delete: (data: IESP["id"]) => Promise<void>
}
