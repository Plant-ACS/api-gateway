import { Device } from "@core/entities/device.ts"

export type TFindDeviceByIdDTO = Device["id"]
export interface IFilterDeviceDTO {
    order: "ASC" | "DESC"
}

export interface IFindDeviceById {
    findById: (data: TFindDeviceByIdDTO) => Promise<Device>     
}

export interface IFindAllDevices {
    findAll: (data: IFilterDeviceDTO) => Promise<Device[]>
}
