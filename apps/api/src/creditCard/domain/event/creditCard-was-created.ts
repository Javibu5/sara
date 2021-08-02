import { StorableEvent } from 'event-sourcing-nestjs';

import { CREDITCARD_AGGREGATE_NAME } from '../model';

export class CreditCardWasCreated extends StorableEvent {
  eventAggregate = CREDITCARD_AGGREGATE_NAME;
  eventVersion = 1;

  constructor(public readonly id: string, public readonly number: number) {
    super();
  }
}
