import { ExpenseDto } from '@sara/contracts/expense';

import { ExpenseId } from '../../domain';

export const EXPENSE_FINDER = 'EXPENSE_FINDER';

export interface IExpenseFinder {
  findAll(): Promise<ExpenseDto[]>;
  find(expenseId: ExpenseId): Promise<ExpenseDto>;
}
