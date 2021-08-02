import { StorableEvent } from 'event-sourcing-nestjs';

import { CHECK_AGGREGATE_NAME } from '../model';

export class CheckInWasDone extends StorableEvent {
  eventAggregate = CHECK_AGGREGATE_NAME;
  eventVersion = 1;

  constructor(public readonly id: string, public readonly inAt: Date) {
    super();
  }
}
