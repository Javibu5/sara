import { Event } from '@aulasoftwarelibre/nestjs-eventstore';

export type TaskEmployeesWasUpdatedProps = {
  employees: string[];
};

export class TaskEmployeesWasUpdated extends Event<TaskEmployeesWasUpdatedProps> {
  constructor(public readonly id: string, public readonly employees: string[]) {
    super(id, {
      employees,
    });
  }
}
