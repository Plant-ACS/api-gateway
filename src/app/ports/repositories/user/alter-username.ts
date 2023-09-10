import { TAlterUsernameDTO } from "@use-cases"

export interface IAlterUsernameRepository {
	alterUsername: (data: TAlterUsernameDTO) => Promise<void>
}
