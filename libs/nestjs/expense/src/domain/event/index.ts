import { Event } from '@aulasoftwarelibre/nestjs-eventstore';
import { CreateExpenseDto } from '@sara/contracts/expense';

import { ExpenseWasCreated } from './expense-was-created.event';

export * from './expense-was-created.event';

export const eventTransformers = {
  ExpenseWasCreated: (event: Event<CreateExpenseDto>) =>
    new ExpenseWasCreated(event.aggregateId),
};
