import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateExpenseDto, ExpenseDto } from '@sara/contracts/expense';
import { UserDto } from '@sara/contracts/user';

import { CreateExpenseCommand } from '../../application';
import { GetExpensesQuery } from '../../application/query/get-expenses.query';

export class ExpenseService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  async create(expenseDto: CreateExpenseDto, userDto: UserDto): Promise<void> {
    await this.commandBus.execute(
      new CreateExpenseCommand(expenseDto, userDto)
    );
  }

  async findAll(): Promise<ExpenseDto[]> {
    const expenses = this.queryBus.execute(new GetExpensesQuery());
    return expenses;
  }
}
