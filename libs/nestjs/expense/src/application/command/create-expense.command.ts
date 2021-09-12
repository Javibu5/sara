import { ICommand } from '@nestjs/cqrs';
import { CreateExpenseDto } from '@sara/contracts/expense';
import { UserDto } from '@sara/contracts/user';

export class CreateExpenseCommand implements ICommand {
  constructor(
    public readonly expense: CreateExpenseDto,
    public readonly user: UserDto
  ) {}
}
