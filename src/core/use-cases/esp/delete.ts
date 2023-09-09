import { IESP } from "@entities"

export type TDeleteESPDTO = IESP["id"]

export interface IDeleteESP {
	delete: (data: TDeleteESPDTO) => Promise<void>
}
