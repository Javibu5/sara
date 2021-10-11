import { GetExpenseHandler } from './get-expense.handler';
import { GetExpensesHandler } from './get-expenses.handler';

export * from './get-expense.query';
export * from './get-expenses.query';

export const queryHandlers = [GetExpensesHandler, GetExpenseHandler];
