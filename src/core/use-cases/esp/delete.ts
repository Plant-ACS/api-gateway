import { IESP } from "@entities"

export interface IDeleteEspDTO {
	readonly id: IESP["id"]
}

export default interface IDeleteEsp {
	delete: (data: IDeleteEspDTO) => Promise<void>
}
