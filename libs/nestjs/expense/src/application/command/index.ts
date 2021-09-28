import { CreateExpenseHandler } from './create-expense.handler';
import { UpdateExpenseHandler } from './update-expense.handler';

export * from './create-expense.command';
export * from './update-expense.command';

export const commandHandlers = [CreateExpenseHandler, UpdateExpenseHandler];
