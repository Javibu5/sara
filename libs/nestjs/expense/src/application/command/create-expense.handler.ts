import {
  AggregateRepository,
  IdAlreadyRegisteredError,
  InjectAggregateRepository,
} from '@aulasoftwarelibre/nestjs-eventstore';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Expense, ExpenseId } from '../../domain';
import { CreateExpenseCommand } from './create-expense.command';

@CommandHandler(CreateExpenseCommand)
export class CreateExpenseHandler
  implements ICommandHandler<CreateExpenseCommand>
{
  constructor(
    @InjectAggregateRepository(Expense)
    private readonly expenses: AggregateRepository<Expense, ExpenseId>
  ) {}
  async execute(command: CreateExpenseCommand): Promise<any> {
    const expenseId = ExpenseId.fromString(command.expense._id);

    if (this.expenses.find(expenseId)) {
      throw IdAlreadyRegisteredError.withId(expenseId);
    }

    const expense = Expense.add(expenseId);

    await this.expenses.save(expense);
  }
}
