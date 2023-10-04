import { IACS } from "@entities";

export type TDeleteACSDTO = {
    readonly id: IACS["id"]
}

export interface IDeleteACS {
    delete: (data: TDeleteACSDTO) => Promise<void>
}
