import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateExpenseDto } from '@sara/contracts/expense';

import { CreateExpenseCommand } from '../../application';

export class ExpenseService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  async create(expenseDto: CreateExpenseDto): Promise<void> {
    await this.commandBus.execute(new CreateExpenseCommand(expenseDto));
  }
}
