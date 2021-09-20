import {
  ExpenseWasCreatedProjection,
  ExpenseWasUpdatedProjection,
} from './projections';

export * from './expense.schema';

export const projectionHandlers = [
  ExpenseWasCreatedProjection,
  ExpenseWasUpdatedProjection,
];
