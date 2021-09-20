import { ICommand } from '@nestjs/cqrs';
import { EditExpenseDto } from '@sara/contracts/expense';

export class UpdateExpenseCommand implements ICommand {
  constructor(
    public readonly id: string,
    public readonly editExpenseDto: EditExpenseDto
  ) {}
}
