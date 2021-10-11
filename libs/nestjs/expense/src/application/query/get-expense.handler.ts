import { IdNotFoundError } from '@aulasoftwarelibre/nestjs-eventstore';
import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ExpenseDto } from '@sara/contracts/expense';

import { ExpenseId } from '../../domain';
import {
  EXPENSE_FINDER,
  IExpenseFinder,
} from '../service/expense-finder.interface';
import { GetExpenseQuery } from './get-expense.query';

@QueryHandler(GetExpenseQuery)
export class GetExpenseHandler implements IQueryHandler<GetExpenseQuery> {
  constructor(
    @Inject(EXPENSE_FINDER)
    private readonly finder: IExpenseFinder
  ) {}

  async execute(query: GetExpenseQuery): Promise<ExpenseDto> {
    const expenseId = ExpenseId.fromString(query.id);

    const expense = await this.finder.find(expenseId);

    if (!expense) {
      throw IdNotFoundError.withId(expenseId);
    }

    return expense;
  }
}
