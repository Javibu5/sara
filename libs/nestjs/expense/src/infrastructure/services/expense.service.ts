import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  CreateExpenseDto,
  EditExpenseDto,
  ExpenseDto,
} from '@sara/contracts/expense';
import { UserDto } from '@sara/contracts/user';

import { CreateExpenseCommand } from '../../application';
import { UpdateExpenseCommand } from '../../application/command/update-expense.command';
import { GetExpenseQuery } from '../../application/query/get-expense.query';
import { GetExpensesQuery } from '../../application/query/get-expenses.query';

@Injectable()
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
    return await this.queryBus.execute(new GetExpensesQuery());
  }

  async findOne(id: string): Promise<ExpenseDto> {
    return this.queryBus.execute(new GetExpenseQuery(id));
  }

  async update(id: string, editExpenseDto: EditExpenseDto) {
    await this.commandBus.execute(new UpdateExpenseCommand(id, editExpenseDto));
  }
}
