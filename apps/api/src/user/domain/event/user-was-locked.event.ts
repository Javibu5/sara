import { StorableEvent } from 'event-sourcing-nestjs';

export class UserWasLocked extends StorableEvent {
  eventAggregate = 'user';
  eventVersion = 1;

  constructor(public readonly id: string) {
    super();
  }
}
