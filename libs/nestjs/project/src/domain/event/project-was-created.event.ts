import { Event } from '@aulasoftwarelibre/nestjs-eventstore';
import { CreateProjectDto } from '@sara/contracts/project';

export class ProjectWasCreated extends Event<CreateProjectDto> {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly deadline: Date,
    public readonly isDone: boolean
  ) {
    super(id, {
      _id: id,
      name,
      description,
      deadline,
      isDone,
    });
  }
}
