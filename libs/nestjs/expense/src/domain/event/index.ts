import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

import {
  ExpenseWasCreated,
  ExpenseWasCreatedProps,
} from './expense-was-created.event';

export * from './expense-was-created.event';

export const eventTransformers = {
  ExpenseWasCreated: (event: Event<ExpenseWasCreatedProps>) =>
    new ExpenseWasCreated(
      event.aggregateId,
      event.payload.reason,
      event.payload.amount,
      event.payload.employeeId,
      event.payload.creditCardId,
      event.payload.status,
      event.payload.createdAt
    ),
};
