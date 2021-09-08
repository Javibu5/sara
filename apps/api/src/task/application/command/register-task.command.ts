import { ICommand } from '@nestjs/cqrs';

export class RegisterTaskCommand implements ICommand {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly projectId: string,
    public readonly createdBy: string
  ) {}
}
