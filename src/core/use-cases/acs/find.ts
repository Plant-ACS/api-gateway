import { IACS } from "@entities"

export type TFindACSByIdDTO = IACS["id"]
export interface IFilterACSDTO {
    order: "ASC" | "DESC"
}
export default interface IFindACS {
    findById: (data: TFindACSByIdDTO) => Promise<IACS>
    findAll: (data: IFilterACSDTO) => Promise<IACS[]>
}
