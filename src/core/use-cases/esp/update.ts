import { IESP } from "@entities"

export type TUpdateESPDTO = {
	readonly id: IESP["id"]
} & Partial<Omit<IESP, "id" | "userId">>

export default interface IUpdateESP {
	update: (data: TUpdateESPDTO) => Promise<IESP>
}
