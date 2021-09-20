import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ExpenseDto } from '@sara/contracts/expense';

import {
  EXPENSE_FINDER,
  IExpenseFinder,
} from '../service/expense-finder.interface';
import { GetExpensesQuery } from './get-expenses.query';

@QueryHandler(GetExpensesQuery)
export class GetExpensesHandler implements IQueryHandler<GetExpensesQuery> {
  constructor(
    @Inject(EXPENSE_FINDER)
    private readonly finder: IExpenseFinder
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async execute(): Promise<ExpenseDto[]> {
    return this.finder.findAll();
  }
}
