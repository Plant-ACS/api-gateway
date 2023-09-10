import { IUser } from "@entities"
import { TFindUserByIdDTO, IFindUserSearchDTO } from "@use-cases"

export interface IFindUserRepository {
	findById: (data: TFindUserByIdDTO) => Promise<IUser>
	findSearch: (data: IFindUserSearchDTO) => Promise<IUser[]>
	findAll: () => Promise<IUser[]>
}
