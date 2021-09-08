import { AggregateRoot } from '@nestjs/cqrs';

import { ProjectId } from '../../../project/domain/model/project-id';
import { UserId } from '../../../user/domain';
import { TaskWasRegister } from '../event/task-was-register';
import { TaskId } from './task-id';

export class Task extends AggregateRoot {
  private _taskId: TaskId;
  private _name: string;
  private _project: ProjectId; //change for projectId
  private _deadline?: Date;
  private _isFinished: boolean;
  private _employeeId?: UserId[];
  private _createdAt: Date;
  private _createdBy: UserId;

  private constructor() {
    super();
  }

  public static registerTask(
    taskId: TaskId,
    name: string,
    projectId: ProjectId,
    createdBy: UserId
  ): Task {
    const task = new Task();

    task.apply(
      new TaskWasRegister(
        taskId.value,
        name,
        projectId.value,
        new Date(),
        createdBy.value
      )
    );

    return task;
  }

  private onTaskWasRegister(event: TaskWasRegister) {
    this._taskId = TaskId.fromString(event.id);
    this._createdBy = UserId.fromString(event.createdBy);
    this._isFinished = false;
    this._name = event.name;
    this._createdAt = event.createdAt;
  }
}
