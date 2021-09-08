import { StorableEvent } from 'event-sourcing-nestjs';

import { CHECK_AGGREGATE_NAME } from '../model';

export class CheckWasCreated extends StorableEvent {
  eventAggregate = CHECK_AGGREGATE_NAME;
  eventVersion = 1;

  constructor(
    public readonly id: string,
    public readonly employeeId: string,
    public readonly inAt: Date | null,
    public readonly outAt: Date | null,
    public readonly createdAt: Date
  ) {
    super();
  }
}
