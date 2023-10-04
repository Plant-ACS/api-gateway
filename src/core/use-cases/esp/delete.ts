import { IESP } from "@entities"

export type TDeleteESPDTO = {
	readonly id: IESP["id"]
}

export interface IDeleteESP {
	delete: (data: TDeleteESPDTO) => Promise<void>
}
