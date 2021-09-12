import { Inject } from '@nestjs/common';
import { IQueryHandler } from '@nestjs/cqrs';

import { ExpenseDto } from '../../../../../contracts/expense/src';
import { IExpenseFinder } from '../service/expense-finder.interface';
import { GetExpensesQuery } from './get-expenses.query';

export class GetExpensesHandler implements IQueryHandler<GetExpensesQuery> {
  constructor(
    @Inject()
    private readonly finder: IExpenseFinder
  ) {}

  async execute(query: GetExpensesQuery): Promise<ExpenseDto[]> {
    return this.finder.findAll();
  }
}
