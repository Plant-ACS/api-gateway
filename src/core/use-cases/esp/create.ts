import { IESP } from "@entities"

export type TCreateESPDTO = Omit<IESP, "id">

export interface ICreateESP {
	create: (data: TCreateESPDTO) => Promise<IESP>
}
