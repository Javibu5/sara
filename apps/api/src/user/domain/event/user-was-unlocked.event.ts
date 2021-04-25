import { StorableEvent } from 'event-sourcing-nestjs';

export class UserWasUnlocked extends StorableEvent {
  eventAggregate = 'user';
  eventVersion = 1;

  constructor(public readonly id: string) {
    super();
  }
}
