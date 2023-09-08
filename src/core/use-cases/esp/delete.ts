import { IESP } from "@entities"

export interface IDeleteESPDTO {
	readonly id: IESP["id"]
}

export default interface IDeleteESP {
	delete: (data: IDeleteESPDTO) => Promise<void>
}
