import {
  AggregateRepository,
  IdAlreadyRegisteredError,
  InjectAggregateRepository,
} from '@aulasoftwarelibre/nestjs-eventstore';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Expense, ExpenseId } from '../../domain';
import { CreditCardId } from '../../domain/model/creditCard-id';
import { EmployeeId } from '../../domain/model/employee-id';
import { ExpenseAmount } from '../../domain/model/expense-amount';
import { Reason } from '../../domain/model/reason';
import { CreateExpenseCommand } from './create-expense.command';

@CommandHandler(CreateExpenseCommand)
export class CreateExpenseHandler
  implements ICommandHandler<CreateExpenseCommand>
{
  constructor(
    @InjectAggregateRepository(Expense)
    private readonly expenses: AggregateRepository<Expense, ExpenseId>
  ) {}
  async execute(command: CreateExpenseCommand) {
    const expenseId = ExpenseId.fromString(command.expense._id);

    if (await this.expenses.find(expenseId)) {
      throw IdAlreadyRegisteredError.withId(expenseId);
    }

    const criteria = {
      id: expenseId,
      reason: Reason.fromString(command.expense.reason),
      amount: ExpenseAmount.fromString(command.expense.amount),
      creditCardId: CreditCardId.fromString(command.expense.creditCardId),
      employeeId: EmployeeId.fromString(command.user._id),
    };

    const expense = Expense.add(criteria);

    await this.expenses.save(expense);
  }
}
