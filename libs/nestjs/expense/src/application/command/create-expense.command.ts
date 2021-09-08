import { ICommand } from '@nestjs/cqrs';
import { CreateExpenseDto } from '@sara/contracts/expense';

export class CreateExpenseCommand implements ICommand {
  constructor(public readonly expense: CreateExpenseDto) {}
}
