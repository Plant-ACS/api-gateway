import { TDeleteESPDTO } from "@use-cases"

export interface IDeleteESPRepository {
	delete: (data: TDeleteESPDTO) => Promise<void>
}
