import { StorableEvent } from 'event-sourcing-nestjs';

export class UserWasCreated extends StorableEvent {
  eventAggregate = 'user';
  eventVersion = 1;

  constructor(
    public readonly id: string,
    public readonly username: string,
    public readonly password: string,
    public readonly name: string,
    public readonly surname: string,
    public readonly nid: string,
    public readonly phonenumber: string,
    public readonly lock: boolean
  ) {
    super();
  }
}
