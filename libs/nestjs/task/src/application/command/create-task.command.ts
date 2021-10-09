import { ICommand } from '@nestjs/cqrs';
import { CreateTaskDto } from '@sara/contracts/task';

export class CreateTaskCommand implements ICommand {
  constructor(public readonly taskDto: CreateTaskDto) {}
}
