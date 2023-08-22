import { Sensor } from "@core/entities/sensor.ts"

export type TCreateSensorDTO = Omit<Sensor, "id">

export default interface ICreateSensor {
	create: (data: TCreateSensorDTO) => Promise<Sensor>
}
