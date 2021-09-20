import {
  AggregateRepository,
  IdNotFoundError,
  InjectAggregateRepository,
} from '@aulasoftwarelibre/nestjs-eventstore';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Expense, ExpenseId } from '../../domain';
import { CreditCardId } from '../../domain/model/creditCard-id';
import { ExpenseAmount } from '../../domain/model/expense-amount';
import { Reason } from '../../domain/model/reason';
import { UpdateExpenseCommand } from './update-expense.command';

@CommandHandler(UpdateExpenseCommand)
export class UpdateExpenseHandler
  implements ICommandHandler<UpdateExpenseCommand>
{
  constructor(
    @InjectAggregateRepository(Expense)
    private readonly expenses: AggregateRepository<Expense, ExpenseId>
  ) {}

  async execute(command: UpdateExpenseCommand) {
    const expenseId = ExpenseId.fromString(command.id);
    const expense = await this.expenses.find(expenseId);
    if (expense) {
      if (command.editExpenseDto.reason) {
        const reason = Reason.fromString(command.editExpenseDto.reason);
        this.updateReason(expense, reason);
      }
      if (command.editExpenseDto.amount) {
        const amount = ExpenseAmount.fromString(command.editExpenseDto.amount);
        this.updateAmount(expense, amount);
      }
      if (command.editExpenseDto.creditCardId) {
        const creditCardId = CreditCardId.fromString(
          command.editExpenseDto.creditCardId
        );
        this.updateCreditCard(expense, creditCardId);
      }

      this.expenses.save(expense);
    }
    throw IdNotFoundError.withId(expenseId);
  }

  private updateReason(expense: Expense, reason: Reason) {
    expense.updateReason(reason);
  }

  private updateAmount(expense: Expense, amount: ExpenseAmount) {
    expense.updateAmount(amount);
  }

  private updateCreditCard(expense: Expense, creditCardId: CreditCardId) {
    expense.updateCreditCard(creditCardId);
  }
}
