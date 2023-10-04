import { IValidateEmail, TValidateEmailDTO } from "@use-cases";
import { IEmailAlreadyExistsRepository, IFindUserRepository, IUpdateUserRepository } from "@app/ports/repositories/user/mod.ts";

export class ValidateEmail implements IValidateEmail {
	constructor(
		readonly findUserRepository: IFindUserRepository,
		readonly emailAlreadyExistsRepository: IEmailAlreadyExistsRepository,
		readonly updateUserRepository: IUpdateUserRepository
	) {}

	async validateEmail(data: TValidateEmailDTO): Promise<void> {
		const emailRegex = /^[a-zA-Z0-9-.+]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
		if (!emailRegex.test(data.email)) {
			throw new Error("Invalid email address");
		}

		const emailExists = await this.emailAlreadyExistsRepository.emailAlreadyExists(data.email);
		if (emailExists) {
			throw new Error("Email already in use");
		}

	}
}
