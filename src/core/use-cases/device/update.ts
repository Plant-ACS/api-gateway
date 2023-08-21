import { Device } from "@core/entities/device.ts"

export type TUpdateDeviceDTO = {
    readonly id: Device["id"]
	} & Partial<Omit<Device, "id" | "createdAt">>

export default interface IUpdateDevice {
    update: (data: TUpdateDeviceDTO) => Promise<Device>
}
