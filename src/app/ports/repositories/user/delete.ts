import { TDeleteUserDTO } from "@use-cases"

export interface IDeleteUserRepository {
	delete: (data: TDeleteUserDTO) => Promise<void>
}
