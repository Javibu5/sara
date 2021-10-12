import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

export type TaskProjectWasUpdatedProps = {
  project: string;
};

export class TaskProjectWasUpdated extends Event<TaskProjectWasUpdatedProps> {
  constructor(public readonly id: string, public readonly project: string) {
    super(id, {
      project,
    });
  }
}
