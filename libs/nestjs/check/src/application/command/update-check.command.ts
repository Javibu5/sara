import { ICommand } from '@nestjs/cqrs';
import { EditCheckDto } from '@sara/contracts/check';

export class UpdateCheckCommand implements ICommand {
  constructor(
    public readonly checkId: string,
    public readonly updateCheckDto: EditCheckDto
  ) {}
}
