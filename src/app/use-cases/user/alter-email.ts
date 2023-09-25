import { IAlterEmail, IAlterEmailDTO } from "@use-cases";
import { IFindUserRepository, IAlterEmailRepository } from "@app/ports/repositories/user/mod.ts";

export class AlterEmail implements IAlterEmail {
    constructor(
        readonly findUserRepository: IFindUserRepository,
        readonly alterEmailRepository: IAlterEmailRepository
    ){}
    async alterEmail(data: IAlterEmailDTO): Promise<void> {
        if (!(await this.findUserRepository.findById(data.id))) 
            throw Error ("The User id passed does not exist")

        return this.alterEmailRepository.alterEmail(data)
    }
}