import { Device } from "@core/entities/device.ts"

export type TFindDeviceByIdDTO = Device["id"]
export interface IFilterDevicesDTO {
    order: "ASC" | "DESC"
}
export interface IFindDevice {
    findById: (data: TFindDeviceByIdDTO) => Promise<Device>
    findAll: (data: IFilterDevicesDTO) => Promise<Device[]>
}
