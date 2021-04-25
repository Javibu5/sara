import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import {
  Password,
  Role,
  User,
  UserId,
  UserIdNotFoundError,
  USERS,
  Users,
} from '../../domain';
import { UpdateUserCommand } from './update-user.command';

@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
  constructor(@Inject(USERS) private users: Users) {}
  async execute(command: UpdateUserCommand) {
    const userId = UserId.fromString(command.userId);

    const user = await this.users.find(userId);
    if (!user) {
      throw UserIdNotFoundError.with(userId);
    }

    if (command.lock === true) {
      user.lock();
    }
    if (command.lock === false) {
      user.unlock();
    }

    // TODO: this.updateUsername(user, command);
    this.updatePassword(user, command);
    this.updateRoles(user, command);

    this.users.save(user);
  }

  private updatePassword(user: User, command: UpdateUserCommand) {
    command.password &&
      user.updatePassword(Password.fromString(command.password));
  }

  private updateRoles(user: User, command: UpdateUserCommand) {
    user.roles.map(
      (role) => !command.roles.includes(role.value) && user.removeRole(role)
    );
    command.roles.map((role) => user.addRole(Role.fromString(role)));
  }
}
