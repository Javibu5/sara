import { StorableEvent } from 'event-sourcing-nestjs';

import { TASK_AGGREGATE_NAME } from '../model';

export class TaskWasRegister extends StorableEvent {
  eventAggregate = TASK_AGGREGATE_NAME;
  eventVersion = 1;

  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly projectId: string,
    public readonly createdAt: Date,
    public readonly createdBy: string
  ) {
    super();
  }
}
