export interface IRecoverPasswordDTO {
    readonly code: string,
    readonly newUsername: string
}

export interface IRecoverPassword {
    recoverPassword: (data: IRecoverPasswordDTO) => Promise<void>
}