export interface IRecoverPasswordDTO {
    readonly code: string,
    readonly newPassword: string
}

export interface IRecoverPassword {
    recoverPassword: (data: IRecoverPasswordDTO) => Promise<void>
}
