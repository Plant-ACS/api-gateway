import { IACS } from "@entities";

export interface IDeleteDeviceDTO {
    readonly id: IACS["id"]
}

export default interface IDeleteDevice {
    delete: (data: IDeleteDeviceDTO) => Promise<void>
}
