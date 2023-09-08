import { IACS } from "@entities"

export type TFindAcsByIdDTO = IACS["id"]
export interface IFilterAcsDTO {
    order: "ASC" | "DESC"
}
export default interface IFindACS {
    findById: (data: TFindAcsByIdDTO) => Promise<IACS>
    findAll: (data: IFilterAcsDTO) => Promise<IACS[]>
}
