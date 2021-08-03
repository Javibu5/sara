import { Event } from '@aulasoftwarelibre/nestjs-eventstore';
import { CreateUserDto } from '@sara/contracts/user';

export class UserWasCreated extends Event<CreateUserDto> {
  constructor(
    public readonly id: string,
    public readonly username: string,
    public readonly password: string,
    public readonly name: string,
    public readonly surname: string,
    public readonly nid: string,
    public readonly phoneNumber: string,
    public readonly lock: boolean
  ) {
    super(id, {
      _id: id,
      username,
      password: password,
      name,
      surname,
      nid,
      phoneNumber,
      lock,
      roles: [],
    });
  }
}
