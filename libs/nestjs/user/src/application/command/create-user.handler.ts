import {
  AggregateRepository,
  IdAlreadyRegisteredError,
  InjectAggregateRepository,
} from '@aulasoftwarelibre/nestjs-eventstore';
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
  UsernameAlreadyTakenError,
} from '../../domain';
import {
  IUserFinder,
  IUserSecurity,
  USER_FINDER,
  USER_SECURITY,
} from '../services';
import { CreateUserCommand } from './create-user.command';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    @InjectAggregateRepository(User)
    private readonly users: AggregateRepository<User, UserId>,
    @Inject(USER_FINDER)
    private readonly finder: IUserFinder,
    @Inject(USER_SECURITY)
    private readonly userSecurity: IUserSecurity
  ) {}

  async execute(command: CreateUserCommand) {
    const userId = UserId.fromString(command.userId);
    const username = Username.fromString(command.username);
    const name = Name.fromString(command.name);
    const surname = Surname.fromString(command.surname);
    const nid = Nid.fromString(command.nid);
    const phonenumber = PhoneNumber.fromString(command.phoneNumber);
    const lock = command.lock;

    console.debug('create command', command);

    if ((await this.users.find(userId)) instanceof User) {
      throw IdAlreadyRegisteredError.withId(userId);
    }

    if (await this.finder.findOneByUsername(username)) {
      throw UsernameAlreadyTakenError.with(username);
    }

    const encodedPassword = await this.userSecurity.encodePassword(
      command.password
    );
    const password = Password.fromString(encodedPassword);

    const user = User.add(
      userId,
      username,
      password,
      name,
      surname,
      phonenumber,
      nid,
      lock
    );
    command.roles.map((role: string) => user.addRole(Role.fromString(role)));

    await this.users.save(user);
  }
}
