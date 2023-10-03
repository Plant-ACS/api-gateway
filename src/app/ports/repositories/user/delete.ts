import { IUser } from "@entities";

export interface IDeleteUserRepository {
	delete: (data: IUser["id"]) => Promise<void>
}
