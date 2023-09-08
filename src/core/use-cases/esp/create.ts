import { IESP } from "@entities"

export type TCreateESPDTO = Omit<IESP, "id">

export default interface ICreateESP {
	create: (data: TCreateESPDTO) => Promise<IESP>
}
