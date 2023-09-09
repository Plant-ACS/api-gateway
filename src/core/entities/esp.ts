import { IModule } from "@entities"
import { IUser } from "@entities"
export interface IESP {
	id: string,
	userId: IUser["id"],
	ports: Array<{
		key: number | number[],
		module: IModule['id']
	}>
}
