import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

import {
  ExpenseCreditCardWasUpdated,
  ExpenseCreditCardWasUpdatedProps,
  ExpenseReasonWasUpdated,
  ExpenseReasonWasUpdatedProps,
} from '..';
import {
  ExpenseWasCreated,
  ExpenseWasCreatedProps,
} from './expense-was-created.event';
import {
  ExpenseAmountWasUpdated,
  ExpenseAmountWasUpdatedProps,
} from './expenses-amount-was-updated.event';

export * from './expense-was-created.event';
export * from './expenses-amount-was-updated.event';
export * from './expenses-creditCard-was-updated.event';
export * from './expenses-reason-was-updated.event';

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
  ExpenseAmountWasUpdated: (event: Event<ExpenseAmountWasUpdatedProps>) =>
    new ExpenseAmountWasUpdated(event.aggregateId, event.payload.amount),
  ExpenseReasonWasUpdated: (event: Event<ExpenseReasonWasUpdatedProps>) =>
    new ExpenseReasonWasUpdated(event.aggregateId, event.payload.reason),
  ExpenseCreditCardWasUpdated: (
    event: Event<ExpenseCreditCardWasUpdatedProps>
  ) =>
    new ExpenseCreditCardWasUpdated(
      event.aggregateId,
      event.payload.creditCardId
    ),
};
