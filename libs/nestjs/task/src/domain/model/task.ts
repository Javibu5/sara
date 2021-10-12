import { AggregateRoot } from '@aulasoftwarelibre/nestjs-eventstore';

import { TaskEmployeesWasUpdated } from '../event/task-employees-was-updated.event';
import { TaskNameWasUpdated } from '../event/task-name-was-updated.event';
import { TaskProjectWasUpdated } from '../event/task-project-was-updated.event';
import { TaskStatusWasUpdated } from '../event/task-status-was-updated.event';
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
  private _isFinished: boolean;
  private _employees: EmployeeId[];

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

  updateName(taskName: TaskName) {
    if (this._name.equals(taskName)) {
      return;
    }

    this.apply(new TaskNameWasUpdated(this._taskId.value, taskName.value));
  }

  updateProject(project: ProjectId) {
    if (this._projectId.equals(project)) {
      return;
    }

    this.apply(new TaskProjectWasUpdated(this._taskId.value, project.value));
  }

  updateEmployees(newEmployees: EmployeeId[]) {
    if (this._employees === newEmployees) {
      return;
    }

    const employees = newEmployees.map((employee) => employee.value);

    this.apply(new TaskEmployeesWasUpdated(this._taskId.value, employees));
  }

  updateStatus(isFinished: boolean) {
    this.apply(new TaskStatusWasUpdated(this._taskId.value, isFinished));
  }

  private onTaskWasCreated(event: TaskWasCreated) {
    this._taskId = TaskId.fromString(event.id);
    this._name = TaskName.fromString(event.name);
    this._projectId = ProjectId.fromString(event.projectId);
    this._deadline = event.deadline;
    this._isFinished = event.isFinished;
    this._employees = event.employees.map((employee) =>
      EmployeeId.fromString(employee)
    );
  }

  private onTaskNameWasUpdated(event: TaskNameWasUpdated) {
    this._name = TaskName.fromString(event.name);
  }
  private onTaskProjectWasUpdated(event: TaskProjectWasUpdated) {
    this._projectId = ProjectId.fromString(event.project);
  }
  private onTaskEmployeesWasUpdated(event: TaskEmployeesWasUpdated) {
    this._employees = event.employees.map((employee) =>
      EmployeeId.fromString(employee)
    );
  }

  private onTaskStatusWasUpdated(event: TaskStatusWasUpdated) {
    this._isFinished = event.isFinished;
  }
}
