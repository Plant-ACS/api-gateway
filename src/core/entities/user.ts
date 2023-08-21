export interface User {
    id: number | string,
    username: string,
    email: string,
    password: string,
    secret: string,
    registeredAt: Date
}