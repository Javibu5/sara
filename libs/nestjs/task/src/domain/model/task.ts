import { AggregateRoot } from '@aulasoftwarelibre/nestjs-eventstore';
import { TaskWasCreated } from '../event/task-was-created.event';
import { EmployeeId } from './employee-id';
import { ProjectId } from './project-id';
import { TaskId } from './task-id';
import { TaskName } from './task-name';

export class Task extends AggregateRoot {
  private _taskId: TaskId;
  private _name: TaskName;
  private _projectId: ProjectId;
  private _deadline?: Date;
  private isFinished: boolean;
  private employees: EmployeeId[];

  aggregateId(): string {
    return this._taskId.value;
  }

  static add(criteria: {
    id: TaskId;
    name: TaskName;
    project: ProjectId;
    employees: EmployeeId[];
    deadline?: Date;
  }) {
    const { id, name, project, employees, deadline } = criteria;
    const task = new Task();

    const employeesIds = employees.map((employee) => employee.value);

    task.apply(
      new TaskWasCreated(
        id.value,
        name.value,
        project.value,
        deadline,
        false,
        employeesIds
      )
    );

    return task;
  }

  private onTaskWasCreated(event: TaskWasCreated) {
    this._taskId = TaskId.fromString(event.id);
    this._name = TaskName.fromString(event.name);
    this._projectId = ProjectId.fromString(event.projectId);
    this._deadline = event.deadline;
    this.isFinished = event.isFinished;
    this.employees = event.employees.map((employee) =>
      EmployeeId.fromString(employee)
    );
  }
}
