import { ExpenseDto } from '@sara/contracts/expense';

export const EXPENSE_FINDER = 'EXPENSE_FINDER';

export interface IExpenseFinder {
  findAll(): Promise<ExpenseDto[]>;
}
