import { Sensor } from "@core/entities/sensor.ts"

export type TFindSensorByIdDTO = Sensor["id"]
export type TFilterSensors = {
	order: "ASC" | "DESC"
}

export default interface IFindSensors {
	findById: (data: TFindSensorByIdDTO) => Promise<Sensor>
	findAll: () => Promise<Sensor[]>
}
