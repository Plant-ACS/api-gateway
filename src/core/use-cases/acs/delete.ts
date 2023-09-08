import { IACS } from "@entities";

export interface IDeleteACSDTO {
    readonly id: IACS["id"]
}

export interface IDeleteACS {
    delete: (data: IDeleteACSDTO) => Promise<void>
}
