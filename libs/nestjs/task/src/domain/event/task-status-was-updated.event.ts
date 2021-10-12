import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

export type TaskStatusWasUpdatedProps = {
  isFinished: boolean;
};

export class TaskStatusWasUpdated extends Event<TaskStatusWasUpdatedProps> {
  constructor(public readonly id: string, public readonly isFinished: boolean) {
    super(id, {
      isFinished,
    });
  }
}
