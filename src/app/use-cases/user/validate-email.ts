import { IValidateEmail, TValidateEmailDTO } from "@use-cases";
import { IEmailAlreadyExistsRepository, IFindUserRepository, IUpdateUserRepository } from "@app/ports/repositories/user/mod.ts";

export class ValidateEmail implements IValidateEmail {
	constructor(
		readonly findUserRepository: IFindUserRepository,
		readonly emailAlreadyExistsRepository: IEmailAlreadyExistsRepository,
		readonly updateUserRepository: IUpdateUserRepository
	) {}

	async validateEmail(data: TValidateEmailDTO): Promise<void> {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(data.email)) {
			throw new Error("Invalid email address");
		}

		const emailExists = await this.emailAlreadyExistsRepository.emailAlreadyExists(data.email);
		if (emailExists) {
			throw new Error("Email already in use");
		}

	}
}
