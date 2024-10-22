import {
  ExpenseAmountWasUpdatedProjection,
  ExpenseCreditCardWasUpdatedProjection,
  ExpenseReasonWasUpdatedProjection,
  ExpenseWasCreatedProjection,
} from './projections';

export * from './expense.schema';

export const projectionHandlers = [
  ExpenseWasCreatedProjection,
  ExpenseAmountWasUpdatedProjection,
  ExpenseCreditCardWasUpdatedProjection,
  ExpenseReasonWasUpdatedProjection,
];
