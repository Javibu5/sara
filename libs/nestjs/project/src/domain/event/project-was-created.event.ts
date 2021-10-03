import { Event } from '@aulasoftwarelibre/nestjs-eventstore';
export type ProjectWasCreatedProps = {
  _id: string;
  name: string;
  description: string;
  deadline: Date;
  isDone: boolean;
}


export class ProjectWasCreated extends Event<ProjectWasCreatedProps> {
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
