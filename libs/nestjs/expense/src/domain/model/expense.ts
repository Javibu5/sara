import { AggregateRoot } from '@aulasoftwarelibre/nestjs-eventstore';

import { ExpenseWasCreated } from '..';
import { CreditCardId } from './creditCard-id';
import { EmployeeId } from './employee-id';
import { ExpenseAmount } from './expense-amount';
import { ExpenseId } from './expense-id';
import { ExpenseStatus } from './expense-status';
import { Reason } from './reason';

export class Expense extends AggregateRoot {
  private _expenseId: ExpenseId;
  private _reason: Reason;
  private _amount: ExpenseAmount;
  private _employeeId: EmployeeId;
  private _creditCardId: CreditCardId;
  private _status: ExpenseStatus;
  private _createdAt: Date;

  aggregateId(): string {
    return this._expenseId.value;
  }

  static add(criteria: {
    id: ExpenseId;
    reason: Reason;
    amount: ExpenseAmount;
    creditCardId: CreditCardId;
    employeeId: EmployeeId;
  }): Expense {
    const { id, reason, amount, creditCardId, employeeId } = criteria;
    const expense = new Expense();

    expense.apply(
      new ExpenseWasCreated(
        id.value,
        reason.value,
        amount.value,
        employeeId.value,
        creditCardId.value,
        'pending',
        new Date()
      )
    );

    return expense;
  }

  private onExpenseWasCreated(event: ExpenseWasCreated) {
    this._expenseId = ExpenseId.fromString(event.id);
    this._reason = Reason.fromString(event.reason);
    this._amount = ExpenseAmount.fromString(event.amount);
    this._employeeId = EmployeeId.fromString(event.employeeId);
    this._creditCardId = CreditCardId.fromString(event.creditCardId);
    this._createdAt = event.createdAt;
  }
}
