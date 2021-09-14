import { ExpenseWasCreatedProjection } from './projections';

export * from './expense.schema';

export const projectionHandlers = [ExpenseWasCreatedProjection];
