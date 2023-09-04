import { IESP } from "@entities"
export interface IACS {
    id: number,
    name: string,
    espId: IESP["id"],
    createdAt: Date
}