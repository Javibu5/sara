import { ICommand } from '@nestjs/cqrs';
import { CreateProjectDto } from '@sara/contracts/project';

export class CreateProjectCommand implements ICommand {
  constructor(public readonly project: CreateProjectDto) {
  }
}
