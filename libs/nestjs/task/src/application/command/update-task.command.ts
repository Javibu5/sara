import { ICommand } from '@nestjs/cqrs';
import { EditTaskDto } from '@sara/contracts/task';

export class UpdateTaskCommand implements ICommand {
  constructor(
    public readonly id: string,
    public readonly editTaskDto: EditTaskDto
  ) {}
}
