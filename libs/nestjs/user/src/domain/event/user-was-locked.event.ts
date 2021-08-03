import { Event } from '@aulasoftwarelibre/nestjs-eventstore';
import { EditUserDto } from '@sara/contracts/user';

export type UserWasLockedProps = Pick<EditUserDto, 'lock'>;

export class UserWasLocked extends Event<UserWasLockedProps> {
  constructor(public readonly id: string, public readonly lock: boolean) {
    super(id, { lock });
  }
}
