import { IACS } from "@entities";

export type TCreateACSDTO = Omit<IACS, "id">

export interface ICreateACS {
    create: (data: TCreateACSDTO) => Promise<IACS>
}
