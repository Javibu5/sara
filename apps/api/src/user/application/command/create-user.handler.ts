import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import {
  Name,
  Nid,
  Password,
  PhoneNumber,
  Role,
  Surname,
  User,
  UserId,
  Username,
  USERS,
  Users,
} from '../../domain';
import {
  UserIdAlreadyTakenError,
  UsernameAlreadyTakenError,
} from '../../domain/exception/';
import { CreateUserCommand } from './create-user.command';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(@Inject(USERS) private users: Users) {}

  async execute(command: CreateUserCommand) {
    const userId = UserId.fromString(command.userId);
    const username = Username.fromString(command.username);
    const name = Name.fromString(command.name);
    const surname = Surname.fromString(command.surname);
    const nid = Nid.fromString(command.nid);
    const phonenumber = PhoneNumber.fromString(command.phoneNumber);
    const password = Password.fromString(command.password);

    if (await this.users.find(userId)) {
      throw UserIdAlreadyTakenError.with(userId);
    }

    if (await this.users.findOneByUsername(username)) {
      throw UsernameAlreadyTakenError.with(username);
    }

    const user = User.add(userId, username, password, nid, name, surname, phonenumber);
    command.roles.map((role: string) => user.addRole(Role.fromString(role)));

    this.users.save(user);
  }
}
