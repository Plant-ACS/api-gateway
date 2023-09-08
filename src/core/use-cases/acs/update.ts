import { IACS } from "@entities"

export type TUpdateACSDTO = {
  readonly id: IACS["id"]
} & Partial<Omit<IACS, "id" | "createdAt">>

export default interface IUpdateACS {
  update: (data: TUpdateACSDTO) => Promise<IACS>
}
