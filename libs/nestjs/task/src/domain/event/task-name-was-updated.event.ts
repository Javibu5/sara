import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

export type TaskNameWasUpdatedProps = {
  name: string;
};

export class TaskNameWasUpdated extends Event<TaskNameWasUpdatedProps> {
  constructor(public readonly id: string, public readonly name: string) {
    super(id, {
      name,
    });
  }
}
