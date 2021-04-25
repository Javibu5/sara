import { ICommand } from '@nestjs/cqrs';

export class CreateUserCommand implements ICommand {
  constructor(
    public readonly userId: string,
    public readonly username: string,
    public readonly name: string,
    public readonly surname: string,
    public readonly nid: string,
    public readonly phoneNumber: string,
    public readonly password: string,
    public readonly lock: boolean,
    public readonly roles: string[]
  ) {}
}
