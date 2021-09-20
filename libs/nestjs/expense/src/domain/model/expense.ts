import { AggregateRoot } from '@aulasoftwarelibre/nestjs-eventstore';

import {
  ExpenseAmountWasUpdated,
  ExpenseCreditCardWasUpdated,
  ExpenseReasonWasUpdated,
  ExpenseWasCreated,
} from '..';
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

  reason(): string {
    return this._reason.value;
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

  updateReason(reason: Reason): void {
    if (this._reason.equals(reason)) {
      return;
    }
    this.apply(
      new ExpenseReasonWasUpdated(this._expenseId.value, reason.value)
    );
  }

  updateAmount(amount: ExpenseAmount): void {
    if (this._amount.equals(amount)) {
      return;
    }

    this.apply(
      new ExpenseAmountWasUpdated(this._expenseId.value, amount.value)
    );
  }

  updateCreditCard(creditCardId: CreditCardId): void {
    if (this._creditCardId.equals(creditCardId)) {
      return;
    }
    this.apply(
      new ExpenseCreditCardWasUpdated(this._expenseId.value, creditCardId.value)
    );
  }

  private onExpenseWasCreated(event: ExpenseWasCreated) {
    this._expenseId = ExpenseId.fromString(event.id);
    this._reason = Reason.fromString(event.reason);
    this._amount = ExpenseAmount.fromString(event.amount);
    this._employeeId = EmployeeId.fromString(event.employeeId);
    this._creditCardId = CreditCardId.fromString(event.creditCardId);
    this._createdAt = event.createdAt;
  }

  private onExpenseReasonWasUpdated(event: ExpenseReasonWasUpdated) {
    this._reason = Reason.fromString(event.reason);
  }

  private onExpenseAmountWasUpdated(event: ExpenseAmountWasUpdated) {
    this._amount = ExpenseAmount.fromString(event.amount);
  }
  private onExpenseCreditCardWasUpdated(event: ExpenseCreditCardWasUpdated) {
    this._expenseId = CreditCardId.fromString(event.creditCardId);
  }
}
