import { IACS } from "@entities";

export type TCreateACSDTO = Omit<IACS, "id">

export default interface ICreateACS {
    create: (data: TCreateACSDTO) => Promise<IACS>
}
