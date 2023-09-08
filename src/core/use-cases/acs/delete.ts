import { IACS } from "@entities";

export interface IDeleteACSDTO {
    readonly id: IACS["id"]
}

export default interface IDeleteACS {
    delete: (data: IDeleteACSDTO) => Promise<void>
}
