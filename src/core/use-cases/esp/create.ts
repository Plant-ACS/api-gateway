import { IESP } from "@entities"

export type TCreateEspDTO = Omit<IESP, "id">

export default interface ICreateEsp {
	create: (data: TCreateEspDTO) => Promise<IESP>
}
