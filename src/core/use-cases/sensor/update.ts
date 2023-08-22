import { Sensor } from "@core/entities/sensor.ts"

export type TUpdateSensorDTO = {
	readonly id: Sensor["id"]
} & Partial<Omit<Sensor, "id">>

export default interface IUpdateSensor {
	update: (data: TUpdateSensorDTO) => Promise<Sensor>
}
