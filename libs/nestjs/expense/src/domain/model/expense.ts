import { AggregateRoot } from '@aulasoftwarelibre/nestjs-eventstore';

import { ExpenseWasCreated } from '..';
import { ExpenseId } from './expenseId';

export class Expense extends AggregateRoot {
  private _expenseId: ExpenseId;

  aggregateId(): string {
    return this._expenseId.value;
  }

  static add(id: ExpenseId): Expense {
    const expense = new Expense();

    expense.apply(new ExpenseWasCreated(id.value));

    return expense;
  }

  private onExpenseWasCreated(event: ExpenseWasCreated) {
    this._expenseId = ExpenseId.fromString(event.id);
  }
}
